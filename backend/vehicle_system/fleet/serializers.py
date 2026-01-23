from rest_framework import serializers
from .models import Vehicle, Breakdown, SparePart, SystemLog, DailyReport, WeeklyReport
from accounts.models import User

class VehicleSerializer(serializers.ModelSerializer):
    driver_username = serializers.CharField(source='driver.username', read_only=True)

    class Meta:
        model = Vehicle
        fields = ('id', 'plate_number', 'brand', 'model', 'status', 'driver', 'driver_username')

class BreakdownSerializer(serializers.ModelSerializer):
    vehicle_plate = serializers.CharField(source='vehicle.plate_number', read_only=True)
    reported_by_username = serializers.CharField(source='reported_by.username', read_only=True)

    class Meta:
        model = Breakdown
        fields = ('id', 'vehicle', 'vehicle_plate', 'reported_by', 'reported_by_username', 'description', 'status', 'created_at')

class SparePartSerializer(serializers.ModelSerializer):
    class Meta:
        model = SparePart
        fields = ('id', 'name', 'quantity', 'description')

class SystemLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemLog
        fields = ('id', 'action', 'timestamp')

class DailyReportSerializer(serializers.ModelSerializer):
    driver_username = serializers.CharField(source='driver.username', read_only=True)
    vehicle_plate = serializers.CharField(source='vehicle.plate_number', read_only=True)

    class Meta:
        model = DailyReport
        fields = ('id', 'driver', 'driver_username', 'vehicle', 'vehicle_plate', 'date', 'mileage', 'fuel_used', 'route_taken', 'issues')

class WeeklyReportSerializer(serializers.ModelSerializer):
    driver_username = serializers.CharField(source='driver.username', read_only=True)
    vehicle_plate = serializers.CharField(source='vehicle.plate_number', read_only=True)

    class Meta:
        model = WeeklyReport
        fields = ('id', 'driver', 'driver_username', 'vehicle', 'vehicle_plate', 'week_start_date', 'summary', 'total_mileage', 'maintenance_needs', 'performance_notes')