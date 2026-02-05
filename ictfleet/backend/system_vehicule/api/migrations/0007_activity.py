# Generated migration for Activity model
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_vehicle_vehicle_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity_type', models.CharField(choices=[('vehicle_created', 'Vehicle Created'), ('vehicle_updated', 'Vehicle Updated'), ('vehicle_status_changed', 'Vehicle Status Changed'), ('vehicle_deleted', 'Vehicle Deleted'), ('user_created', 'User Created'), ('user_updated', 'User Updated'), ('user_profile_updated', 'User Profile Updated'), ('user_deleted', 'User Deleted'), ('report_received', 'Report Received'), ('report_resolved', 'Report Resolved'), ('accessory_created', 'Accessory Created'), ('accessory_updated', 'Accessory Updated'), ('accessory_deleted', 'Accessory Deleted'), ('login', 'User Login'), ('logout', 'User Logout')], max_length=50)),
                ('description', models.TextField()),
                ('related_object_type', models.CharField(max_length=50, blank=True)),
                ('related_object_id', models.IntegerField(blank=True, null=True)),
                ('metadata', models.JSONField(blank=True, default=dict)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=models.SET_NULL, related_name='activities', to='api.user')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
    ]
