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
    filterset_fields = ['is_active']
    search_fields = ['name', 'description']
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
        # Check if stock is low (below 5 units)
        LOW_STOCK_THRESHOLD = 5
        if accessory.stock_level <= LOW_STOCK_THRESHOLD and accessory.is_active:
            # Check if alert already exists and is unresolved
            existing_alert = models.StockAlert.objects.filter(
                accessory=accessory,
                is_resolved=False
            ).first()

            if not existing_alert:
                alert_type = 'out_of_stock' if accessory.stock_level <= 0 else 'low_stock'
                message = f"Stock level is {accessory.stock_level} units"

                models.StockAlert.objects.create(
                    accessory=accessory,
                    alert_type=alert_type,
                    message=message
                )


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
            LOW_STOCK_THRESHOLD = 5
            if accessory.stock_level <= LOW_STOCK_THRESHOLD and accessory.is_active:
                existing_alert = models.StockAlert.objects.filter(
                    accessory=accessory,
                    is_resolved=False
                ).first()

                if not existing_alert:
                    alert_type = 'out_of_stock' if accessory.stock_level <= 0 else 'low_stock'
                    message = f"Stock level is {accessory.stock_level} units"

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


# Removed StockAlert views since the model was removed


class StockAlertListView(generics.ListAPIView):
    """List stock alerts (optionally filter unresolved)"""
    queryset = models.StockAlert.objects.all().order_by('-created_at')
    serializer_class = serializers.StockAlertSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        qs = super().get_queryset()
        # allow queryparam ?unresolved=true to filter unresolved alerts
        unresolved = self.request.query_params.get('unresolved')
        if unresolved and unresolved.lower() in ('1', 'true', 'yes'):
            qs = qs.filter(is_resolved=False)
        return qs


class StockAlertResolveView(generics.UpdateAPIView):
    """Resolve a stock alert by setting `is_resolved`, `resolved_by`, and `resolved_at`"""
    queryset = models.StockAlert.objects.all()
    serializer_class = serializers.StockAlertSerializer
    permission_classes = [IsAuthenticated]

    def patch(self, request, *args, **kwargs):
        alert = self.get_object()
        if alert.is_resolved:
            return Response({'detail': 'Alert already resolved.'}, status=status.HTTP_400_BAD_REQUEST)

        alert.is_resolved = True
        alert.resolved_by = request.user
        alert.resolved_at = timezone.now()
        alert.save()

        return Response(serializers.StockAlertSerializer(alert).data)

    def post(self, request, *args, **kwargs):
        return self.patch(request, *args, **kwargs)
