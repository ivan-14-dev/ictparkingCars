from rest_framework import serializers
from api import models


class VehicleSerializer(serializers.ModelSerializer):
    assigned_driver_name = serializers.CharField(source='assigned_driver.get_full_name', read_only=True)
    image_url = serializers.ImageField(source='image', read_only=True)

    class Meta:
        model = models.Vehicle
        fields = [
            'id', 'make', 'model', 'year', 'license_plate', 'vin', 'status', 'vehicle_type',
            'mileage', 'fuel_type', 'color', 'purchase_date', 'purchase_price',
            'image', 'image_url', 'assigned_driver', 'assigned_driver_name',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class VehicleListSerializer(serializers.ModelSerializer):
    assigned_driver_name = serializers.CharField(source='assigned_driver.get_full_name', read_only=True)

    class Meta:
        model = models.Vehicle
        fields = [
            'id', 'make', 'model', 'year', 'license_plate', 'status', 'vehicle_type',
            'mileage', 'assigned_driver_name', 'image'
        ]


class MaintenanceHistorySerializer(serializers.ModelSerializer):
    vehicle_details = serializers.CharField(source='vehicle.license_plate', read_only=True)
    performed_by_name = serializers.CharField(source='performed_by.get_full_name', read_only=True)

    class Meta:
        model = models.MaintenanceHistory
        fields = [
            'id', 'vehicle', 'vehicle_details', 'maintenance_type', 'description',
            'performed_by', 'performed_by_name', 'cost', 'mileage_at_service',
            'next_service_mileage', 'next_service_date', 'service_date', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']


class MaintenanceHistoryListSerializer(serializers.ModelSerializer):
    vehicle_details = serializers.CharField(source='vehicle.license_plate', read_only=True)
    performed_by_name = serializers.CharField(source='performed_by.get_full_name', read_only=True)

    class Meta:
        model = models.MaintenanceHistory
        fields = [
            'id', 'vehicle_details', 'maintenance_type', 'service_date',
            'performed_by_name', 'cost', 'next_service_date'
        ]