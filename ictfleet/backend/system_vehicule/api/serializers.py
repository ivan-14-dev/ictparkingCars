from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Activity, Vehicle, MaintenanceHistory, Accessory, User, Breakdown, RepairRecord
from django.contrib.auth import get_user_model

User = get_user_model()


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """Custom serializer for JWT token pair that includes user info"""
    
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['user_id'] = user.id
        token['username'] = user.username
        token['role'] = user.role
        return token


class MaintenanceSerializer(serializers.ModelSerializer):
    """Serializer for MaintenanceHistory model"""
    performed_by_name = serializers.CharField(source='performed_by.first_name', read_only=True)
    vehicle_info = serializers.CharField(source='vehicle.__str__', read_only=True)
    
    class Meta:
        model = MaintenanceHistory
        fields = [
            'id', 'vehicle', 'vehicle_info', 'maintenance_type', 'description',
            'performed_by', 'performed_by_name', 'cost', 'mileage_at_service',
            'next_service_mileage', 'next_service_date', 'service_date', 'created_at'
        ]


class VehicleSerializer(serializers.ModelSerializer):
    """Serializer for Vehicle model"""
    assigned_driver_name = serializers.CharField(source='assigned_driver.first_name', read_only=True)
    
    class Meta:
        model = Vehicle
        fields = [
            'id', 'make', 'model', 'year', 'license_plate', 'vin', 'vehicle_type',
            'status', 'mileage', 'fuel_type', 'color', 'purchase_date', 'purchase_price',
            'image', 'assigned_driver', 'assigned_driver_name', 'created_at', 'updated_at'
        ]


class AccessorySerializer(serializers.ModelSerializer):
    """Serializer for Accessory model"""
    
    class Meta:
        model = Accessory
        fields = [
            'id', 'name', 'description', 'price', 'stock_level', 'min_stock_level',
            'supplier', 'image', 'is_active', 'created_at', 'updated_at'
        ]


class ActivitySerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.first_name', read_only=True)
    user_last_name = serializers.CharField(source='user.last_name', read_only=True)
    user_avatar = serializers.SerializerMethodField()
    icon = serializers.SerializerMethodField()

    class Meta:
        model = Activity
        fields = [
            'id', 'activity_type', 'user', 'user_name', 'user_last_name', 'user_avatar',
            'description', 'related_object_type', 'related_object_id', 
            'metadata', 'created_at', 'icon'
        ]

    def get_user_avatar(self, obj):
        if obj.user:
            return f"https://ui-avatars.com/api/?name={obj.user.first_name}+{obj.user.last_name}&background=random"
        return None

    def get_icon(self, obj):
        icon_map = {
            'vehicle_created': 'directions_car',
            'vehicle_updated': 'edit',
            'vehicle_status_changed': 'sync_alt',
            'vehicle_deleted': 'delete',
            'user_created': 'person_add',
            'user_updated': 'edit',
            'user_profile_updated': 'badge',
            'user_deleted': 'person_remove',
            'report_received': 'report_problem',
            'report_resolved': 'check_circle',
            'accessory_created': 'inventory_2',
            'accessory_updated': 'edit',
            'accessory_deleted': 'delete',
            'login': 'login',
            'logout': 'logout',
        }
        return icon_map.get(obj.activity_type, 'info')


class ActivityCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = [
            'activity_type', 'user', 'description', 
            'related_object_type', 'related_object_id', 'metadata'
        ]


class BreakdownSerializer(serializers.ModelSerializer):
    """Serializer for Breakdown model"""
    mechanic_name = serializers.CharField(source='mechanic.get_full_name', read_only=True)
    vehicle_info = serializers.CharField(source='vehicle.__str__', read_only=True)
    
    class Meta:
        model = Breakdown
        fields = [
            'id', 'vehicle', 'vehicle_info', 'mechanic', 'mechanic_name',
            'title', 'description', 'image', 'status', 'reported_at',
            'resolved_at', 'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at', 'reported_at']


class BreakdownCreateSerializer(serializers.ModelSerializer):
    """Serializer for creating breakdowns with image"""
    
    class Meta:
        model = Breakdown
        fields = ['vehicle', 'title', 'description', 'image']
    
    def create(self, validated_data):
        # Set the mechanic from the request user
        validated_data['mechanic'] = self.context['request'].user
        return super().create(validated_data)


class RepairRecordSerializer(serializers.ModelSerializer):
    """Serializer for RepairRecord model"""
    mechanic_name = serializers.CharField(source='mechanic.get_full_name', read_only=True)
    vehicle_info = serializers.CharField(source='vehicle.__str__', read_only=True)
    accessories_names = serializers.SerializerMethodField(read_only=True)
    reviewed_by_name = serializers.CharField(source='reviewed_by.get_full_name', read_only=True)
    
    class Meta:
        model = RepairRecord
        fields = [
            'id', 'vehicle', 'vehicle_info', 'mechanic', 'mechanic_name',
            'title', 'description', 'work_images', 'accessories_used', 'accessories_names',
            'status', 'completed_at', 'reviewed_at', 'reviewed_by', 'reviewed_by_name',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at', 'completed_at', 'reviewed_at', 'reviewed_by']
    
    def get_accessories_names(self, obj):
        return [{'id': a.id, 'name': a.name} for a in obj.accessories_used.all()]


class RepairRecordCreateSerializer(serializers.ModelSerializer):
    """Serializer for creating repair records"""
    accessories_used = serializers.PrimaryKeyRelatedField(
        queryset=Accessory.objects.all(),
        many=True,
        required=False
    )
    
    class Meta:
        model = RepairRecord
        fields = ['vehicle', 'title', 'description', 'work_images', 'accessories_used']
    
    def create(self, validated_data):
        # Set the mechanic from the request user
        validated_data['mechanic'] = self.context['request'].user
        accessories = validated_data.pop('accessories_used', [])
        
        repair_record = super().create(validated_data)
        
        # Add accessories after creation
        if accessories:
            repair_record.accessories_used.set(accessories)
        
        return repair_record


