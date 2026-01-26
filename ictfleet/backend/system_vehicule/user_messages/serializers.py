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
            'id', 'sender_name', 'recipient_name', 'subject', 'is_read', 'created_at'
        ]


class MessageCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Message
        fields = ['recipient', 'subject', 'body']

    def create(self, validated_data):
        validated_data['sender'] = self.context['request'].user
        return super().create(validated_data)