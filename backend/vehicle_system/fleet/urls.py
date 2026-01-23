from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'vehicles', views.VehicleViewSet)
router.register(r'breakdowns', views.BreakdownViewSet)
router.register(r'spare-parts', views.SparePartViewSet)
router.register(r'system-logs', views.SystemLogViewSet)
router.register(r'daily-reports', views.DailyReportViewSet)
router.register(r'weekly-reports', views.WeeklyReportViewSet)

urlpatterns = [
    path('', include(router.urls)),
]