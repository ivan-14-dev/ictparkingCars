from rest_framework import serializers
from api import models


class AccessorySerializer(serializers.ModelSerializer):
    image_url = serializers.ImageField(source='image', read_only=True)
    vehicles = serializers.PrimaryKeyRelatedField(
        many=True, 
        queryset=models.Vehicle.objects.all(), 
        required=False,
        help_text='Vehicle IDs this accessory can be used for'
    )
    vehicle_details = serializers.SerializerMethodField()
    
    class Meta:
        model = models.Accessory
        fields = [
            'id', 'name', 'description', 'price',
            'stock_level', 'image', 'image_url', 'is_active', 'created_at', 'updated_at',
            'vehicles', 'vehicle_details'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def get_vehicle_details(self, obj):
        return [{"id": v.id, "name": f"{v.make} {v.model}", "license_plate": v.license_plate} for v in obj.vehicles.all()]


class AccessoryListSerializer(serializers.ModelSerializer):
    vehicles = serializers.PrimaryKeyRelatedField(
        many=True, 
        queryset=models.Vehicle.objects.all(), 
        required=False
    )
    vehicle_details = serializers.SerializerMethodField()
    
    class Meta:
        model = models.Accessory
        fields = [
            'id', 'name', 'description', 'price', 'stock_level', 'is_active', 'image', 'created_at', 'updated_at',
            'vehicles', 'vehicle_details'
        ]
    
    def get_vehicle_details(self, obj):
        return [{"id": v.id, "name": f"{v.make} {v.model}", "license_plate": v.license_plate} for v in obj.vehicles.all()]


class StockAlertSerializer(serializers.ModelSerializer):
    accessory_name = serializers.CharField(source='accessory.name', read_only=True)
    current_stock = serializers.IntegerField(source='accessory.stock_level', read_only=True)

    class Meta:
        model = models.StockAlert
        fields = [
            'id', 'accessory', 'accessory_name', 'current_stock',
            'alert_type', 'message', 'is_resolved', 'resolved_at', 'resolved_by', 'created_at'
        ]
        read_only_fields = ['id', 'created_at', 'resolved_at']


class StockUpdateSerializer(serializers.Serializer):
    """Serializer for stock level updates"""
    stock_change = serializers.IntegerField(min_value=-10000, max_value=10000)
    reason = serializers.CharField(max_length=255, required=False, allow_blank=True)

    def validate_stock_change(self, value):
        # Additional validation can be added here
        return value