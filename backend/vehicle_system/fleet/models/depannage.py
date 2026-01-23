from django.db import models
from .vehicle import Vehicle
from accounts.models import User

class Breakdown(models.Model):
    STATUS_CHOICES = (
        ('REPORTED', 'Reported'),
        ('IN_PROGRESS', 'In Progress'),
        ('RESOLVED', 'Resolved'),
    )

    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    reported_by = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        limit_choices_to={'role': 'DRIVER'}
    )
    description = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.vehicle.plate_number} - {self.status}"
