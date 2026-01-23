from django.db import models
from .vehicle import Vehicle
from accounts.models import User

class WeeklyReport(models.Model):
    driver = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        limit_choices_to={'role': 'DRIVER'}
    )
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    week_start_date = models.DateField(help_text="Start date of the week (Monday)")
    summary = models.TextField(help_text="Weekly summary")
    total_mileage = models.PositiveIntegerField(help_text="Total mileage for the week")
    maintenance_needs = models.TextField(blank=True, help_text="Maintenance needs identified")
    performance_notes = models.TextField(blank=True, help_text="Performance notes")

    class Meta:
        unique_together = ('driver', 'vehicle', 'week_start_date')
        ordering = ['-week_start_date']

    def __str__(self):
        return f"Weekly Report - {self.driver.username} - {self.vehicle.plate_number} - {self.week_start_date}"