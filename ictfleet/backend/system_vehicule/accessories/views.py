from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from django.utils import timezone
from api import models
from . import serializers


class AccessoryViewSet(ModelViewSet):
    """
    ViewSet for Accessory CRUD operations with filtering and stock management
    """
    queryset = models.Accessory.objects.all()
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['category', 'is_active', 'supplier']
    search_fields = ['name', 'sku', 'description']
    ordering_fields = ['name', 'price', 'stock_level', 'created_at']
    ordering = ['name']

    def get_serializer_class(self):
        if self.action == 'list':
            return serializers.AccessoryListSerializer
        return serializers.AccessorySerializer

    def perform_create(self, serializer):
        accessory = serializer.save()
        # Check for low stock after creation
        self._check_stock_alerts(accessory)

    def perform_update(self, serializer):
        accessory = serializer.save()
        # Check for low stock after update
        self._check_stock_alerts(accessory)

    @action(detail=True, methods=['patch'])
    def update_stock(self, request, pk=None):
        """Update stock level for an accessory"""
        accessory = self.get_object()
        serializer = serializers.StockUpdateSerializer(data=request.data)

        if serializer.is_valid():
            stock_change = serializer.validated_data['stock_change']
            reason = serializer.validated_data.get('reason', '')

            # Update stock level
            old_stock = accessory.stock_level
            accessory.stock_level += stock_change
            accessory.save()

            # Log the stock change (you could create a StockLog model for this)
            # For now, we'll just check for alerts

            self._check_stock_alerts(accessory)

            return Response({
                'message': f'Stock updated from {old_stock} to {accessory.stock_level}',
                'accessory': serializers.AccessorySerializer(accessory).data
            })

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def _check_stock_alerts(self, accessory):
        """Check and create stock alerts if necessary"""
        # Check if stock is low
        if accessory.stock_level <= accessory.min_stock_level and accessory.is_active:
            # Check if alert already exists and is unresolved
            existing_alert = models.StockAlert.objects.filter(
                accessory=accessory,
                is_resolved=False
            ).first()

            if not existing_alert:
                alert_type = 'out_of_stock' if accessory.stock_level <= 0 else 'low_stock'
                message = f"Stock level is {accessory.stock_level}, below minimum of {accessory.min_stock_level}"

                models.StockAlert.objects.create(
                    accessory=accessory,
                    alert_type=alert_type,
                    message=message
                )

        # If stock is back to normal levels, we could auto-resolve alerts
        # But for now, we'll leave them for manual resolution


# Alternative class-based views
class AccessoryListCreateView(generics.ListCreateAPIView):
    queryset = models.Accessory.objects.all()
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['category', 'is_active', 'supplier']
    search_fields = ['name', 'sku', 'description']
    ordering_fields = ['name', 'price', 'stock_level', 'created_at']
    ordering = ['name']

    def get_serializer_class(self):
        return serializers.AccessoryListSerializer


class AccessoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Accessory.objects.all()
    serializer_class = serializers.AccessorySerializer
    permission_classes = [IsAuthenticated]


class AccessoryStockUpdateView(generics.UpdateAPIView):
    queryset = models.Accessory.objects.all()
    serializer_class = serializers.StockUpdateSerializer
    permission_classes = [IsAuthenticated]

    def patch(self, request, *args, **kwargs):
        accessory = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            stock_change = serializer.validated_data['stock_change']
            old_stock = accessory.stock_level
            accessory.stock_level += stock_change
            accessory.save()

            # Check for stock alerts
            if accessory.stock_level <= accessory.min_stock_level and accessory.is_active:
                existing_alert = models.StockAlert.objects.filter(
                    accessory=accessory,
                    is_resolved=False
                ).first()

                if not existing_alert:
                    alert_type = 'out_of_stock' if accessory.stock_level <= 0 else 'low_stock'
                    message = f"Stock level is {accessory.stock_level}, below minimum of {accessory.min_stock_level}"

                    models.StockAlert.objects.create(
                        accessory=accessory,
                        alert_type=alert_type,
                        message=message
                    )

            return Response({
                'message': f'Stock updated from {old_stock} to {accessory.stock_level}',
                'accessory': serializers.AccessorySerializer(accessory).data
            })

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StockAlertListView(generics.ListAPIView):
    serializer_class = serializers.StockAlertSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['alert_type', 'is_resolved', 'accessory']
    search_fields = ['message', 'accessory__name', 'accessory__sku']
    ordering_fields = ['created_at', 'alert_type']
    ordering = ['-created_at']

    def get_queryset(self):
        return models.StockAlert.objects.select_related('accessory', 'resolved_by')


class StockAlertResolveView(generics.UpdateAPIView):
    queryset = models.StockAlert.objects.all()
    permission_classes = [IsAuthenticated]

    def patch(self, request, *args, **kwargs):
        alert = self.get_object()

        if alert.is_resolved:
            return Response(
                {'message': 'Alert is already resolved'},
                status=status.HTTP_400_BAD_REQUEST
            )

        alert.is_resolved = True
        alert.resolved_at = timezone.now()
        alert.resolved_by = request.user
        alert.save()

        return Response({
            'message': 'Stock alert resolved',
            'alert': serializers.StockAlertSerializer(alert).data
        })
