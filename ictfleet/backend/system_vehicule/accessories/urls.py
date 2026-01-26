from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router for ViewSets
router = DefaultRouter()
router.register(r'', views.AccessoryViewSet, basename='accessory')

urlpatterns = [
    # Include router URLs (provides CRUD operations and custom actions)
    path('', include(router.urls)),

    # Stock alerts endpoints
    path('alerts/', views.StockAlertListView.as_view(), name='stock-alerts'),
    path('alerts/<int:pk>/resolve/', views.StockAlertResolveView.as_view(), name='stock-alert-resolve'),

    # Alternative class-based views (for compatibility)
    path('list/', views.AccessoryListCreateView.as_view(), name='accessory-list-alt'),
    path('detail/<int:pk>/', views.AccessoryDetailView.as_view(), name='accessory-detail-alt'),
    path('<int:pk>/stock/', views.AccessoryStockUpdateView.as_view(), name='accessory-stock-update-alt'),
]