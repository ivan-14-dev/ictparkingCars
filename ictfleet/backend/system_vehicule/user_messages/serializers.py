from rest_framework import serializers
from api import models


class MessageSerializer(serializers.ModelSerializer):
    sender_name = serializers.CharField(source='sender.get_full_name', read_only=True)
    recipient_name = serializers.CharField(source='recipient.get_full_name', read_only=True)

    class Meta:
        model = models.Message
        fields = [
            'id', 'sender', 'sender_name', 'recipient', 'recipient_name',
            'subject', 'body', 'is_read', 'created_at'
        ]
        read_only_fields = ['id', 'sender', 'created_at']


class MessageListSerializer(serializers.ModelSerializer):
    sender_name = serializers.CharField(source='sender.get_full_name', read_only=True)
    recipient_name = serializers.CharField(source='recipient.get_full_name', read_only=True)

    class Meta:
        model = models.Message
        fields = [
            'id', 'sender_name', 'recipient_name', 'subject', 'body', 'is_read', 'created_at'
        ]


class MessageCreateSerializer(serializers.Serializer):
    """Simple serializer that accepts any fields and handles everything in create."""
    recipient = serializers.CharField(required=False, allow_blank=True)
    subject = serializers.CharField(required=False, allow_blank=True)
    body = serializers.CharField(required=False, allow_blank=True)

    def create(self, validated_data):
        # Get the requesting user as sender
        sender = self.context['request'].user
        
        # Find admin user as recipient (for driver messages)
        from api.models import User
        admin_user = User.objects.filter(role='admin').first()
        
        if not admin_user:
            raise serializers.ValidationError({"detail": "No admin user found"})
        
        # Create the message
        message = models.Message.objects.create(
            sender=sender,
            recipient=admin_user,
            subject=validated_data.get('subject', ''),
            body=validated_data.get('body', '')
        )
        
        # Log activity for report received
        from api.models import Activity
        Activity.log_activity(
            activity_type='report_received',
            user=sender,
            description=f"Report submitted: {message.subject}",
            related_object_type='message',
            related_object_id=message.id,
            metadata={
                'recipient': admin_user.username,
                'subject': message.subject,
                'body_preview': message.body[:100] if message.body else ''
            }
        )
        
        return message