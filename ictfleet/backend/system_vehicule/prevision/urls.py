"""
URL Configuration for Prevision AI Chat Assistant
"""

from django.urls import path
from .views import ChatView

urlpatterns = [
    path('chat/', ChatView.as_view(), name='prevision_chat'),
]
