from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router for ViewSets
router = DefaultRouter()
router.register(r'', views.NotificationViewSet, basename='notification')

urlpatterns = [
    # Include router URLs (provides CRUD operations and custom actions)
    path('', include(router.urls)),

    # Broadcast notifications endpoint
    path('broadcast/', views.NotificationBroadcastView.as_view(), name='notification-broadcast'),

    # Alternative class-based views (for compatibility)
    path('list/', views.NotificationListCreateView.as_view(), name='notification-list-alt'),
    path('detail/<int:pk>/', views.NotificationDetailView.as_view(), name='notification-detail-alt'),
    path('<int:pk>/read/', views.NotificationMarkReadView.as_view(), name='notification-mark-read-alt'),
    path('unread/', views.NotificationUnreadView.as_view(), name='notification-unread-alt'),
]