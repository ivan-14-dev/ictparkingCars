# Generated migration for adding vehicle_type field

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_accessory_category_remove_accessory_location_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='vehicle',
            name='vehicle_type',
            field=models.CharField(
                blank=True,
                choices=[
                    ('sedan', 'Sedan'),
                    ('suv', 'SUV'),
                    ('truck', 'Truck'),
                    ('van', 'Van'),
                    ('bus', 'Bus'),
                    ('motorcycle', 'Motorcycle'),
                    ('other', 'Other'),
                ],
                default='other',
                max_length=20
            ),
        ),
    ]
