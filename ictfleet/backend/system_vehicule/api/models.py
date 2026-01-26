from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone


class User(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Administrator'),
        ('manager', 'Fleet Manager'),
        ('driver', 'Driver'),
        ('mechanic', 'Mechanic'),
    ]

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='driver')
    department = models.CharField(max_length=100, blank=True)
    phone_number = models.CharField(max_length=20, blank=True)
    employee_id = models.CharField(max_length=20, unique=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)

    def __str__(self):
        return f"{self.username} - {self.get_role_display()}"


class Vehicle(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('maintenance', 'Under Maintenance'),
        ('inactive', 'Inactive'),
        ('retired', 'Retired'),
    ]

    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    year = models.PositiveIntegerField()
    license_plate = models.CharField(max_length=20, unique=True)
    vin = models.CharField(max_length=17, unique=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    mileage = models.PositiveIntegerField(default=0)
    fuel_type = models.CharField(max_length=20, blank=True)
    color = models.CharField(max_length=30, blank=True)
    purchase_date = models.DateField(null=True, blank=True)
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    image = models.ImageField(upload_to='vehicle_images/', blank=True, null=True)
    assigned_driver = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='assigned_vehicles')
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.year} {self.make} {self.model} - {self.license_plate}"


class MaintenanceHistory(models.Model):
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
    cost = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    mileage_at_service = models.PositiveIntegerField(null=True, blank=True)
    next_service_mileage = models.PositiveIntegerField(null=True, blank=True)
    next_service_date = models.DateField(null=True, blank=True)
    service_date = models.DateField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.vehicle} - {self.get_maintenance_type_display()} ({self.service_date})"


class Accessory(models.Model):
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
    sku = models.CharField(max_length=50, unique=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='other')
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    stock_level = models.PositiveIntegerField(default=0)
    min_stock_level = models.PositiveIntegerField(default=5)
    supplier = models.CharField(max_length=100, blank=True)
    location = models.CharField(max_length=100, blank=True)  # Warehouse location
    image = models.ImageField(upload_to='accessory_images/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} ({self.sku})"

    @property
    def is_low_stock(self):
        return self.stock_level <= self.min_stock_level


class StockAlert(models.Model):
    ALERT_TYPE_CHOICES = [
        ('low_stock', 'Low Stock'),
        ('out_of_stock', 'Out of Stock'),
        ('reorder', 'Reorder Required'),
    ]

    accessory = models.ForeignKey(Accessory, on_delete=models.CASCADE, related_name='stock_alerts')
    alert_type = models.CharField(max_length=20, choices=ALERT_TYPE_CHOICES)
    message = models.TextField()
    is_resolved = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now)
    resolved_at = models.DateTimeField(null=True, blank=True)
    resolved_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"{self.accessory.name} - {self.get_alert_type_display()}"


class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages')
    subject = models.CharField(max_length=200)
    body = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"From {self.sender} to {self.recipient}: {self.subject}"


class Notification(models.Model):
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
    is_broadcast = models.BooleanField(default=False)  # If true, sent to all users
    recipients = models.ManyToManyField(User, related_name='notifications', blank=True)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='created_notifications')
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title

    def send_to_all_users(self):
        """Send notification to all active users"""
        from django.contrib.auth import get_user_model
        User = get_user_model()
        active_users = User.objects.filter(is_active=True)
        self.recipients.set(active_users)
        self.save()


class NotificationRead(models.Model):
    """Tracks which users have read which notifications"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='read_notifications')
    notification = models.ForeignKey(Notification, on_delete=models.CASCADE, related_name='read_by')
    read_at = models.DateTimeField(default=timezone.now)

    class Meta:
        unique_together = ('user', 'notification')

    def __str__(self):
        return f"{self.user} read {self.notification}"
