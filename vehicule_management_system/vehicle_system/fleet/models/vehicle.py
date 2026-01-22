from django.db import models
from accounts.models import User

class Vehicle(models.Model):
    STATUS_CHOICES = (
        ('ACTIVE', 'Active'),
        ('BROKEN', 'Broken Down'),
        ('MAINTENANCE', 'Under Maintenance'),
    )

    plate_number = models.CharField(max_length=20, unique=True)
    brand = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    driver = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        limit_choices_to={'role': 'DRIVER'}
    )

    def __str__(self):
        return f"{self.plate_number} - {self.brand} {self.model}"
