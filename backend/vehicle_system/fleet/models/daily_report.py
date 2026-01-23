from django.db import models
from .vehicle import Vehicle
from accounts.models import User

class DailyReport(models.Model):
    driver = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        limit_choices_to={'role': 'DRIVER'}
    )
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    date = models.DateField()
    mileage = models.PositiveIntegerField(help_text="Mileage driven today")
    fuel_used = models.DecimalField(max_digits=6, decimal_places=2, help_text="Fuel used in liters")
    route_taken = models.TextField(help_text="Description of the route taken")
    issues = models.TextField(blank=True, help_text="Any issues encountered")

    class Meta:
        unique_together = ('driver', 'vehicle', 'date')
        ordering = ['-date']

    def __str__(self):
        return f"Daily Report - {self.driver.username} - {self.vehicle.plate_number} - {self.date}"