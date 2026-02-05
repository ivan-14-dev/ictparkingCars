from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path('auth/token/', views.CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/', include('users.urls')),
    path('vehicles/', include('vehicles.urls')),
    path('accessories/', include('accessories.urls')),
    path('messages/', include('user_messages.urls')),
    path('notifications/', include('notifications.urls')),
    path('maintenance/', views.MaintenanceListView.as_view(), name='maintenance-list'),
    path('activities/', views.ActivityListView.as_view(), name='activity-list'),
    path('activities/recent/', views.RecentActivityView.as_view(), name='activity-recent'),
    path('activities/create/', views.ActivityCreateView.as_view(), name='activity-create'),
    path('breakdowns/', views.BreakdownListView.as_view(), name='breakdown-list'),
    path('breakdowns/create/', views.BreakdownCreateView.as_view(), name='breakdown-create'),
    path('breakdowns/<int:pk>/', views.BreakdownDetailView.as_view(), name='breakdown-detail'),
    path('repairs/', views.RepairRecordListView.as_view(), name='repair-list'),
    path('repairs/create/', views.RepairRecordCreateView.as_view(), name='repair-create'),
    path('repairs/<int:pk>/', views.RepairRecordDetailView.as_view(), name='repair-detail'),
]