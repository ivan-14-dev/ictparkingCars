from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('ADMIN', 'Administrator'),
        ('DRIVER', 'Driver'),
        ('TECHNICIAN', 'Technician'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    employee_id = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(unique=True)
