from django.urls import path, include
from rest_framework.routers import SimpleRouter
from . import views

# Create a router for ViewSets
router = SimpleRouter()
router.register(r'', views.VehicleViewSet, basename='vehicle')

urlpatterns = [
    # Include router URLs
    path('', include(router.urls)),

    # Additional maintenance endpoints
    path('<int:vehicle_pk>/maintenance/', views.MaintenanceHistoryListCreateView.as_view(), name='vehicle-maintenance'),
    path('maintenance/', views.MaintenanceHistoryListCreateView.as_view(), name='all-maintenance'),
    path('maintenance/<int:pk>/', views.MaintenanceHistoryDetailView.as_view(), name='maintenance-detail'),

    # Alternative class-based views (for compatibility)
    path('list/', views.VehicleListCreateView.as_view(), name='vehicle-list-alt'),
    path('detail/<int:pk>/', views.VehicleDetailView.as_view(), name='vehicle-detail-alt'),
]