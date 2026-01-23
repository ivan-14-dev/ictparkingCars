from django.db import models

class SparePart(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name
