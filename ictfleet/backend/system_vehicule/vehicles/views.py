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

    @action(detail=False, methods=['get'])
    def my_vehicles(self, request):
        """Get all vehicles assigned to the current user (driver)"""
        vehicles = models.Vehicle.objects.filter(assigned_driver=request.user)
        if not vehicles.exists():
            return Response({'detail': 'No vehicles assigned'}, status=status.HTTP_404_NOT_FOUND)
        serializer = serializers.VehicleSerializer(vehicles, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def my_vehicle(self, request):
        """Get the first vehicle assigned to the current user (driver)"""
        vehicle = models.Vehicle.objects.filter(assigned_driver=request.user).first()
        if not vehicle:
            return Response({'detail': 'No vehicle assigned'}, status=status.HTTP_404_NOT_FOUND)
        serializer = serializers.VehicleSerializer(vehicle)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def maintenance_history(self, request, pk=None):
        """Get maintenance history for a specific vehicle"""
        vehicle = self.get_object()
        maintenance_records = models.MaintenanceHistory.objects.filter(vehicle=vehicle)
        serializer = serializers.MaintenanceHistoryListSerializer(maintenance_records, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['patch'])
    def update_status(self, request, pk=None):
        """Update only the status of a vehicle"""
        vehicle = self.get_object()
        new_status = request.data.get('status')
        
        if not new_status:
            return Response({'error': 'Status is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Validate status against choices
        valid_choices = [choice[0] for choice in models.Vehicle.STATUS_CHOICES]
        if new_status not in valid_choices:
            return Response(
                {'error': f'Invalid status. Must be one of: {valid_choices}'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        vehicle.status = new_status
        vehicle.save()
        
        return Response({
            'message': 'Status updated successfully',
            'status': vehicle.status
        })


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
