from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from django.utils import timezone
from api import models
from . import serializers


class NotificationViewSet(ModelViewSet):
    """
    ViewSet for Notification CRUD operations
    """
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['notification_type', 'is_broadcast', 'created_by']
    search_fields = ['title', 'message']
    ordering_fields = ['created_at', 'title']
    ordering = ['-created_at']

    def get_queryset(self):
        """Return notifications for the current user"""
        return models.Notification.objects.filter(recipients=self.request.user)

    def get_serializer_class(self):
        if self.action == 'create':
            return serializers.NotificationCreateSerializer
        elif self.action == 'list':
            return serializers.NotificationListSerializer
        return serializers.NotificationSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    @action(detail=True, methods=['patch'])
    def mark_read(self, request, pk=None):
        """Mark a notification as read for the current user"""
        notification = self.get_object()

        # Check if user is a recipient
        if request.user not in notification.recipients.all():
            return Response(
                {'error': 'You are not a recipient of this notification'},
                status=status.HTTP_403_FORBIDDEN
            )

        # Create or update read record
        read_record, created = models.NotificationRead.objects.get_or_create(
            user=request.user,
            notification=notification,
            defaults={'read_at': timezone.now()}
        )

        if not created:
            read_record.read_at = timezone.now()
            read_record.save()

        return Response({
            'message': 'Notification marked as read',
            'data': serializers.NotificationSerializer(notification, context={'request': request}).data
        })

    @action(detail=False, methods=['get'])
    def unread(self, request):
        """Get unread notifications for the current user"""
        unread_notifications = self.get_queryset().exclude(
            id__in=models.NotificationRead.objects.filter(
                user=request.user
            ).values_list('notification_id', flat=True)
        )

        serializer = serializers.NotificationListSerializer(
            unread_notifications,
            many=True,
            context={'request': request}
        )
        return Response(serializer.data)


class NotificationBroadcastView(generics.CreateAPIView):
    """Special view for creating broadcast notifications"""
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.NotificationCreateSerializer

    def perform_create(self, serializer):
        notification = serializer.save(created_by=self.request.user, is_broadcast=True)
        notification.send_to_all_users()


# Alternative class-based views
class NotificationListCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['notification_type', 'is_broadcast']
    search_fields = ['title', 'message']
    ordering_fields = ['created_at', 'title']
    ordering = ['-created_at']

    def get_queryset(self):
        return models.Notification.objects.filter(recipients=self.request.user)

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return serializers.NotificationCreateSerializer
        return serializers.NotificationListSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class NotificationDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.NotificationSerializer

    def get_queryset(self):
        return models.Notification.objects.filter(recipients=self.request.user)


class NotificationMarkReadView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return models.Notification.objects.filter(recipients=self.request.user)

    def patch(self, request, *args, **kwargs):
        notification = self.get_object()

        read_record, created = models.NotificationRead.objects.get_or_create(
            user=request.user,
            notification=notification,
            defaults={'read_at': timezone.now()}
        )

        if not created:
            read_record.read_at = timezone.now()
            read_record.save()

        return Response({
            'message': 'Notification marked as read',
            'data': serializers.NotificationSerializer(notification).data
        })


class NotificationUnreadView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.NotificationListSerializer

    def get_queryset(self):
        return models.Notification.objects.filter(
            recipients=self.request.user
        ).exclude(
            id__in=models.NotificationRead.objects.filter(
                user=self.request.user
            ).values_list('notification_id', flat=True)
        )
