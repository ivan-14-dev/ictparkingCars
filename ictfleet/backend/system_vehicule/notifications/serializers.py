from rest_framework import serializers
from api import models


class NotificationSerializer(serializers.ModelSerializer):
    created_by_name = serializers.CharField(source='created_by.get_full_name', read_only=True)
    recipients_count = serializers.SerializerMethodField()

    class Meta:
        model = models.Notification
        fields = [
            'id', 'title', 'message', 'notification_type', 'is_broadcast',
            'recipients', 'created_by', 'created_by_name', 'created_at',
            'recipients_count'
        ]
        read_only_fields = ['id', 'created_by', 'created_at', 'recipients_count']

    def get_recipients_count(self, obj):
        return obj.recipients.count()


class NotificationListSerializer(serializers.ModelSerializer):
    created_by_name = serializers.CharField(source='created_by.get_full_name', read_only=True)
    is_read = serializers.SerializerMethodField()

    class Meta:
        model = models.Notification
        fields = [
            'id', 'title', 'notification_type', 'is_broadcast',
            'created_by_name', 'created_at', 'is_read'
        ]

    def get_is_read(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return models.NotificationRead.objects.filter(
                user=request.user,
                notification=obj
            ).exists()
        return False


class NotificationCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Notification
        fields = ['title', 'message', 'notification_type', 'is_broadcast', 'recipients']

    def create(self, validated_data):
        validated_data['created_by'] = self.context['request'].user
        notification = super().create(validated_data)

        # If it's a broadcast notification, send to all users
        if notification.is_broadcast:
            notification.send_to_all_users()

        return notification


class NotificationReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.NotificationRead
        fields = ['id', 'user', 'notification', 'read_at']
        read_only_fields = ['id', 'user', 'read_at']