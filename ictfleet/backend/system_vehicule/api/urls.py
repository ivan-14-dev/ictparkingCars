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
]