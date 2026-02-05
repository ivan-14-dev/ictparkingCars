from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models


@admin.register(models.User)
class CustomUserAdmin(UserAdmin):
    """Custom admin for the User model"""
    list_display = ('username', 'email', 'first_name', 'last_name', 'role', 'department', 'is_active', 'date_joined')
    list_filter = ('role', 'department', 'is_active', 'is_staff', 'date_joined')
    search_fields = ('username', 'email', 'first_name', 'last_name', 'employee_id')
    ordering = ('-date_joined',)

    fieldsets = UserAdmin.fieldsets + (
        ('Additional Info', {
            'fields': ('role', 'department', 'phone_number', 'employee_id')
        }),
    )

    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Additional Info', {
            'fields': ('role', 'department', 'phone_number', 'employee_id', 'first_name', 'last_name')
        }),
    )


@admin.register(models.Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    """Admin for Vehicle model"""
    list_display = ('license_plate', 'make', 'model', 'year', 'status', 'assigned_driver', 'mileage')
    list_filter = ('status', 'make', 'year', 'fuel_type', 'assigned_driver')
    search_fields = ('license_plate', 'make', 'model', 'vin', 'assigned_driver__username')
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')

    fieldsets = (
        ('Basic Information', {
            'fields': ('make', 'model', 'year', 'license_plate', 'vin')
        }),
        ('Status & Assignment', {
            'fields': ('status', 'assigned_driver', 'mileage')
        }),
        ('Specifications', {
            'fields': ('fuel_type', 'color', 'purchase_date', 'purchase_price')
        }),
        ('Media', {
            'fields': ('image',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(models.MaintenanceHistory)
class MaintenanceHistoryAdmin(admin.ModelAdmin):
    """Admin for MaintenanceHistory model"""
    list_display = ('vehicle', 'maintenance_type', 'service_date', 'performed_by', 'cost', 'mileage_at_service')
    list_filter = ('maintenance_type', 'service_date', 'performed_by')
    search_fields = ('vehicle__license_plate', 'vehicle__make', 'vehicle__model', 'description')
    ordering = ('-service_date',)
    readonly_fields = ('created_at',)

    fieldsets = (
        ('Vehicle & Service', {
            'fields': ('vehicle', 'maintenance_type', 'description')
        }),
        ('Service Details', {
            'fields': ('performed_by', 'cost', 'mileage_at_service', 'service_date')
        }),
        ('Next Service', {
            'fields': ('next_service_mileage', 'next_service_date')
        }),
        ('Timestamps', {
            'fields': ('created_at',),
            'classes': ('collapse',)
        }),
    )


@admin.register(models.Accessory)
class AccessoryAdmin(admin.ModelAdmin):
    """Admin for Accessory model"""
    list_display = ('name', 'price', 'stock_level', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('name', 'description')
    ordering = ('name',)
    readonly_fields = ('created_at', 'updated_at')

    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'description')
        }),
        ('Pricing & Stock', {
            'fields': ('price', 'stock_level')
        }),
        ('Media & Status', {
            'fields': ('image', 'is_active')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(models.StockAlert)
class StockAlertAdmin(admin.ModelAdmin):
    """Admin for StockAlert model"""
    list_display = ('accessory', 'alert_type', 'is_resolved', 'created_at', 'resolved_at')
    list_filter = ('alert_type', 'is_resolved', 'created_at')
    search_fields = ('accessory__name', 'accessory__sku', 'message')
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'resolved_at')

    fieldsets = (
        ('Alert Details', {
            'fields': ('accessory', 'alert_type', 'message')
        }),
        ('Resolution', {
            'fields': ('is_resolved', 'resolved_by', 'resolved_at')
        }),
        ('Timestamps', {
            'fields': ('created_at',),
            'classes': ('collapse',)
        }),
    )


@admin.register(models.Message)
class MessageAdmin(admin.ModelAdmin):
    """Admin for Message model"""
    list_display = ('sender', 'recipient', 'subject', 'is_read', 'created_at')
    list_filter = ('is_read', 'created_at', 'sender', 'recipient')
    search_fields = ('subject', 'body', 'sender__username', 'recipient__username')
    ordering = ('-created_at',)
    readonly_fields = ('created_at',)

    fieldsets = (
        ('Message Details', {
            'fields': ('sender', 'recipient', 'subject', 'body')
        }),
        ('Status', {
            'fields': ('is_read',)
        }),
        ('Timestamps', {
            'fields': ('created_at',),
            'classes': ('collapse',)
        }),
    )


@admin.register(models.Notification)
class NotificationAdmin(admin.ModelAdmin):
    """Admin for Notification model"""
    list_display = ('title', 'notification_type', 'is_broadcast', 'created_by', 'created_at')
    list_filter = ('notification_type', 'is_broadcast', 'created_at')
    search_fields = ('title', 'message', 'created_by__username')
    ordering = ('-created_at',)
    readonly_fields = ('created_at',)

    fieldsets = (
        ('Notification Details', {
            'fields': ('title', 'message', 'notification_type')
        }),
        ('Broadcast Settings', {
            'fields': ('is_broadcast', 'recipients')
        }),
        ('Meta', {
            'fields': ('created_by', 'created_at')
        }),
    )

    filter_horizontal = ('recipients',)


@admin.register(models.Breakdown)
class BreakdownAdmin(admin.ModelAdmin):
    """Admin for Breakdown model"""
    list_display = ('title', 'vehicle', 'mechanic', 'status', 'reported_at')
    list_filter = ('status', 'reported_at', 'vehicle')
    search_fields = ('title', 'description', 'vehicle__license_plate', 'mechanic__username')
    ordering = ('-reported_at',)
    readonly_fields = ('created_at', 'updated_at', 'reported_at')

    fieldsets = (
        ('Breakdown Details', {
            'fields': ('vehicle', 'title', 'description')
        }),
        ('Reporting', {
            'fields': ('mechanic', 'image')
        }),
        ('Status', {
            'fields': ('status', 'resolved_at')
        }),
        ('Timestamps', {
            'fields': ('reported_at', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(models.RepairRecord)
class RepairRecordAdmin(admin.ModelAdmin):
    """Admin for RepairRecord model"""
    list_display = ('title', 'vehicle', 'mechanic', 'status', 'completed_at', 'reviewed_by')
    list_filter = ('status', 'completed_at', 'vehicle', 'mechanic')
    search_fields = ('title', 'description', 'vehicle__license_plate', 'mechanic__username')
    ordering = ('-completed_at',)
    readonly_fields = ('created_at', 'updated_at', 'completed_at', 'reviewed_at')
    filter_horizontal = ('accessories_used',)

    fieldsets = (
        ('Repair Details', {
            'fields': ('vehicle', 'title', 'description')
        }),
        ('Work Information', {
            'fields': ('mechanic', 'work_images', 'accessories_used')
        }),
        ('Review Status', {
            'fields': ('status', 'reviewed_by', 'reviewed_at')
        }),
        ('Timestamps', {
            'fields': ('completed_at', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )



# Configure admin site
admin.site.site_header = 'ICT Fleet Management Administration'
admin.site.site_title = 'ICT Fleet Admin'
admin.site.index_title = 'Fleet Management Dashboard'

