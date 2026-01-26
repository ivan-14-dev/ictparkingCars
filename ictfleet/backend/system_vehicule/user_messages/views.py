from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from django.db.models import Q
from api import models
from . import serializers


class MessageViewSet(ModelViewSet):
    """
    ViewSet for Message CRUD operations
    """
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['is_read', 'sender', 'recipient']
    search_fields = ['subject', 'body', 'sender__username', 'recipient__username']
    ordering_fields = ['created_at', 'subject']
    ordering = ['-created_at']

    def get_queryset(self):
        """Return messages where user is sender or recipient"""
        user = self.request.user
        return models.Message.objects.filter(
            Q(sender=user) | Q(recipient=user)
        )

    def get_serializer_class(self):
        if self.action == 'create':
            return serializers.MessageCreateSerializer
        elif self.action == 'list':
            return serializers.MessageListSerializer
        return serializers.MessageSerializer

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)

    @action(detail=False, methods=['get'])
    def inbox(self, request):
        """Get messages received by the user"""
        messages = self.get_queryset().filter(recipient=request.user)
        serializer = serializers.MessageListSerializer(messages, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def sent(self, request):
        """Get messages sent by the user"""
        messages = self.get_queryset().filter(sender=request.user)
        serializer = serializers.MessageListSerializer(messages, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['patch'])
    def mark_read(self, request, pk=None):
        """Mark a message as read"""
        message = self.get_object()

        # Check if user is the recipient
        if message.recipient != request.user:
            return Response(
                {'error': 'You can only mark your own messages as read'},
                status=status.HTTP_403_FORBIDDEN
            )

        message.is_read = True
        message.save()

        return Response({
            'message': 'Message marked as read',
            'data': serializers.MessageSerializer(message).data
        })


# Alternative class-based views
class MessageListCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['is_read', 'sender', 'recipient']
    search_fields = ['subject', 'body']
    ordering_fields = ['created_at', 'subject']
    ordering = ['-created_at']

    def get_queryset(self):
        user = self.request.user
        return models.Message.objects.filter(
            models.Q(sender=user) | models.Q(recipient=user)
        )

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return serializers.MessageCreateSerializer
        return serializers.MessageListSerializer

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)


class MessageDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.MessageSerializer

    def get_queryset(self):
        user = self.request.user
        return models.Message.objects.filter(
            models.Q(sender=user) | models.Q(recipient=user)
        )


class MessageInboxView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.MessageListSerializer
    ordering = ['-created_at']

    def get_queryset(self):
        return models.Message.objects.filter(recipient=self.request.user)


class MessageSentView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.MessageListSerializer
    ordering = ['-created_at']

    def get_queryset(self):
        return models.Message.objects.filter(sender=self.request.user)


class MessageMarkReadView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.MessageSerializer

    def get_queryset(self):
        return models.Message.objects.filter(recipient=self.request.user)

    def patch(self, request, *args, **kwargs):
        message = self.get_object()
        message.is_read = True
        message.save()

        return Response({
            'message': 'Message marked as read',
            'data': serializers.MessageSerializer(message).data
        })
