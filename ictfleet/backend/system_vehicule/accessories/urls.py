from django.urls import path, include
from rest_framework.routers import SimpleRouter
from . import views

# Create a router for ViewSets
router = SimpleRouter()
router.register(r'', views.AccessoryViewSet, basename='accessory')

urlpatterns = [
    # Stock alerts endpoints (must come before router to prevent catch-all)
    path('alerts/', views.StockAlertListView.as_view(), name='stock-alerts'),
    path('alerts/<int:pk>/resolve/', views.StockAlertResolveView.as_view(), name='stock-alert-resolve'),

    # Alternative class-based views (for compatibility)
    path('list/', views.AccessoryListCreateView.as_view(), name='accessory-list-alt'),
    path('detail/<int:pk>/', views.AccessoryDetailView.as_view(), name='accessory-detail-alt'),
    path('<int:pk>/stock/', views.AccessoryStockUpdateView.as_view(), name='accessory-stock-update-alt'),

    # Include router URLs (provides CRUD operations and custom actions)
    path('', include(router.urls)),
]