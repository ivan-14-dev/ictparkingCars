from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router for ViewSets
router = DefaultRouter()
router.register(r'', views.MessageViewSet, basename='message')

urlpatterns = [
    # Include router URLs (provides CRUD operations and custom actions)
    path('', include(router.urls)),

    # Alternative class-based views (for compatibility)
    path('list/', views.MessageListCreateView.as_view(), name='message-list-alt'),
    path('detail/<int:pk>/', views.MessageDetailView.as_view(), name='message-detail-alt'),
    path('inbox/', views.MessageInboxView.as_view(), name='message-inbox-alt'),
    path('sent/', views.MessageSentView.as_view(), name='message-sent-alt'),
    path('<int:pk>/read/', views.MessageMarkReadView.as_view(), name='message-mark-read-alt'),
]