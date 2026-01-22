from django.contrib import admin
from .models import Vehicle, SparePart, Breakdown, SystemLog

@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ('plate_number', 'brand', 'model', 'status', 'driver')
    list_filter = ('status', 'brand')
    search_fields = ('plate_number', 'brand', 'model')

@admin.register(SparePart)
class SparePartAdmin(admin.ModelAdmin):
    list_display = ('name', 'quantity')
    search_fields = ('name',)

@admin.register(Breakdown)
class BreakdownAdmin(admin.ModelAdmin):
    list_display = ('vehicle', 'reported_by', 'status', 'created_at')
    list_filter = ('status',)
    search_fields = ('vehicle__plate_number', 'reported_by__username')

@admin.register(SystemLog)
class SystemLogAdmin(admin.ModelAdmin):
    list_display = ('timestamp', 'action')
    search_fields = ('action',)

