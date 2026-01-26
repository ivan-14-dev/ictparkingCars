from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from api import models
from . import serializers


class VehicleViewSet(ModelViewSet):
    """
    ViewSet for Vehicle CRUD operations with filtering and search
    """
    queryset = models.Vehicle.objects.all()
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['status', 'make', 'model', 'year', 'assigned_driver']
    search_fields = ['license_plate', 'make', 'model', 'vin', 'assigned_driver__username']
    ordering_fields = ['created_at', 'updated_at', 'year', 'mileage', 'license_plate']
    ordering = ['-created_at']

    def get_serializer_class(self):
        if self.action == 'list':
            return serializers.VehicleListSerializer
        return serializers.VehicleSerializer

    @action(detail=True, methods=['get'])
    def maintenance_history(self, request, pk=None):
        """Get maintenance history for a specific vehicle"""
        vehicle = self.get_object()
        maintenance_records = models.MaintenanceHistory.objects.filter(vehicle=vehicle)
        serializer = serializers.MaintenanceHistoryListSerializer(maintenance_records, many=True)
        return Response(serializer.data)


# Alternative class-based views (keeping for compatibility)
class VehicleListCreateView(generics.ListCreateAPIView):
    queryset = models.Vehicle.objects.all()
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['status', 'make', 'model', 'year', 'assigned_driver']
    search_fields = ['license_plate', 'make', 'model', 'vin', 'assigned_driver__username']
    ordering_fields = ['created_at', 'updated_at', 'year', 'mileage', 'license_plate']
    ordering = ['-created_at']

    def get_serializer_class(self):
        return serializers.VehicleListSerializer


class VehicleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Vehicle.objects.all()
    serializer_class = serializers.VehicleSerializer
    permission_classes = [IsAuthenticated]


class MaintenanceHistoryListCreateView(generics.ListCreateAPIView):
    serializer_class = serializers.MaintenanceHistorySerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['maintenance_type', 'performed_by', 'vehicle']
    search_fields = ['description', 'vehicle__license_plate']
    ordering_fields = ['service_date', 'created_at', 'cost']
    ordering = ['-service_date']

    def get_queryset(self):
        queryset = models.MaintenanceHistory.objects.all()
        vehicle_pk = self.kwargs.get('vehicle_pk')
        if vehicle_pk:
            queryset = queryset.filter(vehicle_id=vehicle_pk)
        return queryset

    def perform_create(self, serializer):
        serializer.save(performed_by=self.request.user)


class MaintenanceHistoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.MaintenanceHistory.objects.all()
    serializer_class = serializers.MaintenanceHistorySerializer
    permission_classes = [IsAuthenticated]
