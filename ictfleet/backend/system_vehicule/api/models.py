from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone


class User(AbstractUser):
    """Custom User model extending Django's AbstractUser"""
    ROLE_CHOICES = [
        ('admin', 'Administrator'),
        ('manager', 'Fleet Manager'),
        ('driver', 'Driver'),
        ('mechanic', 'Mechanic'),
    ]
    
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='driver')
    department = models.CharField(max_length=100, blank=True)
    phone_number = models.CharField(max_length=20, blank=True)
    employee_id = models.CharField(max_length=20, blank=True, null=True, unique=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    
    def __str__(self):
        return self.username


class Vehicle(models.Model):
    """Vehicle model for fleet management"""
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('maintenance', 'Under Maintenance'),
        ('inactive', 'Inactive'),
        ('retired', 'Retired'),
    ]
    
    FUEL_TYPE_CHOICES = [
        ('gasoline', 'Gasoline'),
        ('diesel', 'Diesel'),
        ('electric', 'Electric'),
        ('hybrid', 'Hybrid'),
        ('other', 'Other'),
    ]
    
    VEHICLE_TYPE_CHOICES = [
        ('sedan', 'Sedan'),
        ('suv', 'SUV'),
        ('truck', 'Truck'),
        ('van', 'Van'),
        ('bus', 'Bus'),
        ('motorcycle', 'Motorcycle'),
        ('pickup', 'Pickup'),
        ('golf_cart', 'Golf Cart'),
        ('other', 'Other'),
    ]
    
    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    year = models.PositiveIntegerField()
    license_plate = models.CharField(max_length=20, unique=True)
    vin = models.CharField(max_length=17, blank=True, null=True)
    vehicle_type = models.CharField(max_length=20, choices=VEHICLE_TYPE_CHOICES, default='other')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    mileage = models.PositiveIntegerField(default=0)
    fuel_type = models.CharField(max_length=20, choices=FUEL_TYPE_CHOICES, blank=True)
    color = models.CharField(max_length=30, blank=True)
    purchase_date = models.DateField(blank=True, null=True)
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    image = models.ImageField(upload_to='vehicle_images/', blank=True, null=True)
    assigned_driver = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='assigned_vehicles')
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.year} {self.make} {self.model} ({self.license_plate})"


class MaintenanceHistory(models.Model):
    """Maintenance history records for vehicles"""
    MAINTENANCE_TYPE_CHOICES = [
        ('oil_change', 'Oil Change'),
        ('tire_rotation', 'Tire Rotation'),
        ('brake_service', 'Brake Service'),
        ('engine_repair', 'Engine Repair'),
        ('transmission', 'Transmission Service'),
        ('inspection', 'Regular Inspection'),
        ('other', 'Other'),
    ]
    
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name='maintenance_history')
    maintenance_type = models.CharField(max_length=20, choices=MAINTENANCE_TYPE_CHOICES)
    description = models.TextField()
    performed_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    cost = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    mileage_at_service = models.PositiveIntegerField(blank=True, null=True)
    next_service_mileage = models.PositiveIntegerField(blank=True, null=True)
    next_service_date = models.DateField(blank=True, null=True)
    service_date = models.DateField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return f"{self.vehicle} - {self.get_maintenance_type_display()}"


class Accessory(models.Model):
    """Accessory model for vehicle parts and accessories"""
    CATEGORY_CHOICES = [
        ('tires', 'Tires'),
        ('battery', 'Battery'),
        ('brakes', 'Brakes'),
        ('filters', 'Filters'),
        ('lights', 'Lights'),
        ('tools', 'Tools'),
        ('other', 'Other'),
    ]
    
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    stock_level = models.PositiveIntegerField(default=0)
    min_stock_level = models.PositiveIntegerField(default=5)
    supplier = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to='accessory_images/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name


class StockAlert(models.Model):
    """Stock alerts for accessories"""
    ALERT_TYPE_CHOICES = [
        ('low_stock', 'Low Stock'),
        ('out_of_stock', 'Out of Stock'),
        ('reorder', 'Reorder Required'),
    ]
    
    accessory = models.ForeignKey(Accessory, on_delete=models.CASCADE, related_name='stock_alerts')
    alert_type = models.CharField(max_length=20, choices=ALERT_TYPE_CHOICES)
    message = models.TextField()
    is_resolved = models.BooleanField(default=False)
    resolved_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    resolved_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return f"{self.accessory.name} - {self.get_alert_type_display()}"


class Message(models.Model):
    """Internal messaging system"""
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages')
    subject = models.CharField(max_length=200)
    body = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return f"{self.sender} to {self.recipient}: {self.subject}"


class Notification(models.Model):
    """Notification system for users"""
    NOTIFICATION_TYPE_CHOICES = [
        ('system', 'System Notification'),
        ('maintenance', 'Maintenance Reminder'),
        ('stock', 'Stock Alert'),
        ('vehicle', 'Vehicle Update'),
        ('general', 'General'),
    ]
    
    title = models.CharField(max_length=200)
    message = models.TextField()
    notification_type = models.CharField(max_length=20, choices=NOTIFICATION_TYPE_CHOICES, default='general')
    is_broadcast = models.BooleanField(default=False)
    recipients = models.ManyToManyField(User, related_name='notifications', blank=True)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='created_notifications')
    created_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.title
    
    def send_to_all_users(self):
        """Send notification to all active users"""
        from django.contrib.auth import get_user_model
        User = get_user_model()
        all_users = User.objects.filter(is_active=True)
        self.recipients.set(all_users)


class NotificationRead(models.Model):
    """Tracks which users have read which notifications"""
    notification = models.ForeignKey(Notification, on_delete=models.CASCADE, related_name='read_by')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='read_notifications')
    read_at = models.DateTimeField(default=timezone.now)
    
    class Meta:
        unique_together = ['user', 'notification']
    
    def __str__(self):
        return f"{self.user} read {self.notification}"


class Activity(models.Model):
    """Activity logging for tracking all important events in the system"""
    ACTIVITY_TYPES = [
        ('vehicle_created', 'Vehicle Created'),
        ('vehicle_updated', 'Vehicle Updated'),
        ('vehicle_status_changed', 'Vehicle Status Changed'),
        ('vehicle_deleted', 'Vehicle Deleted'),
        ('user_created', 'User Created'),
        ('user_updated', 'User Updated'),
        ('user_profile_updated', 'User Profile Updated'),
        ('user_deleted', 'User Deleted'),
        ('report_received', 'Report Received'),
        ('report_resolved', 'Report Resolved'),
        ('accessory_created', 'Accessory Created'),
        ('accessory_updated', 'Accessory Updated'),
        ('accessory_deleted', 'Accessory Deleted'),
        ('login', 'User Login'),
        ('logout', 'User Logout'),
    ]
    
    activity_type = models.CharField(max_length=50, choices=ACTIVITY_TYPES)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='activities')
    description = models.TextField()
    related_object_type = models.CharField(max_length=50, blank=True)
    related_object_id = models.IntegerField(null=True, blank=True)
    metadata = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['-created_at']),
            models.Index(fields=['activity_type']),
            models.Index(fields=['user']),
        ]
    
    def __str__(self):
        return f"{self.get_activity_type_display()} - {self.created_at}"
    
    @staticmethod
    def log_activity(activity_type, user, description, related_object_type=None, related_object_id=None, metadata=None):
        """Helper method to log an activity"""
        return Activity.objects.create(
            activity_type=activity_type,
            user=user,
            description=description,
            related_object_type=related_object_type,
            related_object_id=related_object_id,
            metadata=metadata or {}
        )


class Breakdown(models.Model):
    """Vehicle breakdown reports submitted by mechanics"""
    STATUS_CHOICES = [
        ('reported', 'Reported'),
        ('acknowledged', 'Acknowledged'),
        ('resolved', 'Resolved'),
        ('closed', 'Closed'),
    ]
    
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name='breakdowns')
    mechanic = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='reported_breakdowns')
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='breakdown_images/', blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='reported')
    reported_at = models.DateTimeField(default=timezone.now)
    resolved_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.vehicle} - {self.title}"
    
    class Meta:
        ordering = ['-reported_at']


class RepairRecord(models.Model):
    """Repair records submitted by mechanics after completing repairs"""
    STATUS_CHOICES = [
        ('submitted', 'Submitted'),
        ('reviewed', 'Reviewed'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]
    
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name='repair_records')
    mechanic = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='repair_records')
    title = models.CharField(max_length=200)
    description = models.TextField()
    work_images = models.ImageField(upload_to='repair_images/', blank=True, null=True)
    accessories_used = models.ManyToManyField(Accessory, related_name='used_in_repairs', blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='submitted')
    completed_at = models.DateTimeField(default=timezone.now)
    reviewed_at = models.DateTimeField(blank=True, null=True)
    reviewed_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='reviewed_repairs')
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.vehicle} - Repair by {self.mechanic}"
    
    class Meta:
        ordering = ['-completed_at']
