# Migration to update vehicle_type field choices to include pickup and golf_cart

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_add_missing_accessory_columns'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicle',
            name='vehicle_type',
            field=models.CharField(
                choices=[
                    ('sedan', 'Sedan'),
                    ('suv', 'SUV'),
                    ('truck', 'Truck'),
                    ('van', 'Van'),
                    ('bus', 'Bus'),
                    ('motorcycle', 'Motorcycle'),
                    ('pickup', 'Pickup'),
                    ('golf_cart', 'Golf Cart'),
                    ('other', 'Other'),
                ],
                default='other',
                max_length=20
            ),
        ),
    ]
