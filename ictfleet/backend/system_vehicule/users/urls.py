from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.UserRegistrationView.as_view(), name='user-register'),
    path('login/', views.user_login, name='user-login'),
    path('logout/', views.user_logout, name='user-logout'),
    path('profile/', views.UserProfileView.as_view(), name='user-profile'),
    path('list/', views.UserListView.as_view(), name='user-list'),
    path('create/', views.UserCreateView.as_view(), name='user-create'),
    path('<int:pk>/', views.UserDetailView.as_view(), name='user-detail'),
]