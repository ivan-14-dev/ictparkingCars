from rest_framework import viewsets, status

from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated

from .models import Vehicle, Breakdown, SparePart, SystemLog, DailyReport, WeeklyReport

from .serializers import VehicleSerializer, BreakdownSerializer, SparePartSerializer, SystemLogSerializer, DailyReportSerializer, WeeklyReportSerializer

from accounts.permissions import IsAdmin, IsDriver, IsTechnician, IsAdminOrTechnician, IsOwnerOrAdmin

class VehicleViewSet(viewsets.ModelViewSet):

    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

    def get_queryset(self):

        user = self.request.user

        if user.role == 'ADMIN':

            return Vehicle.objects.all()

        elif user.role == 'DRIVER':

            return Vehicle.objects.filter(driver=user)

        else:  # TECHNICIAN

            return Vehicle.objects.all()

    def get_permissions(self):

        if self.action in ['create', 'update', 'partial_update', 'destroy']:

            self.permission_classes = [IsAuthenticated, IsAdmin]

        else:

            self.permission_classes = [IsAuthenticated]

        return super().get_permissions()

class BreakdownViewSet(viewsets.ModelViewSet):

    queryset = Breakdown.objects.all()
    serializer_class = BreakdownSerializer

    def get_queryset(self):

        user = self.request.user

        if user.role == 'ADMIN':

            return Breakdown.objects.all()

        elif user.role == 'DRIVER':

            return Breakdown.objects.filter(reported_by=user)

        else:  # TECHNICIAN

            return Breakdown.objects.all()

    def get_permissions(self):

        if self.action == 'create':

            self.permission_classes = [IsAuthenticated, IsDriver]

        elif self.action in ['update', 'partial_update']:

            self.permission_classes = [IsAuthenticated, IsAdminOrTechnician]

        elif self.action == 'destroy':

            self.permission_classes = [IsAuthenticated, IsAdmin]

        else:

            self.permission_classes = [IsAuthenticated]

        return super().get_permissions()

    def perform_create(self, serializer):

        serializer.save(reported_by=self.request.user)

        vehicle = serializer.validated_data['vehicle']

        vehicle.status = 'BROKEN'

        vehicle.save()

        SystemLog.objects.create(action=f"Breakdown reported for vehicle {vehicle.plate_number} by {self.request.user.username}")

    def perform_update(self, serializer):

        instance = serializer.save()

        if instance.status == 'RESOLVED':

            instance.vehicle.status = 'ACTIVE'

            instance.vehicle.save()

            SystemLog.objects.create(action=f"Breakdown resolved for vehicle {instance.vehicle.plate_number} by {self.request.user.username}")

        elif instance.status == 'IN_PROGRESS':

            instance.vehicle.status = 'MAINTENANCE'

            instance.vehicle.save()

            SystemLog.objects.create(action=f"Breakdown in progress for vehicle {instance.vehicle.plate_number} by {self.request.user.username}")

class SparePartViewSet(viewsets.ModelViewSet):

    queryset = SparePart.objects.all()

    serializer_class = SparePartSerializer

    permission_classes = [IsAuthenticated, IsAdminOrTechnician]

    def perform_create(self, serializer):

        instance = serializer.save()

        SystemLog.objects.create(action=f"Spare part {instance.name} added with quantity {instance.quantity} by {self.request.user.username}")

    def perform_update(self, serializer):

        old_quantity = self.get_object().quantity

        instance = serializer.save()

        if instance.quantity != old_quantity:

            SystemLog.objects.create(action=f"Spare part {instance.name} quantity changed from {old_quantity} to {instance.quantity} by {self.request.user.username}")

    def perform_destroy(self, instance):

        SystemLog.objects.create(action=f"Spare part {instance.name} removed by {self.request.user.username}")

        instance.delete()

class SystemLogViewSet(viewsets.ReadOnlyModelViewSet):

    queryset = SystemLog.objects.all()

    serializer_class = SystemLogSerializer

    permission_classes = [IsAuthenticated, IsAdmin]

class DailyReportViewSet(viewsets.ModelViewSet):

    queryset = DailyReport.objects.all()
    serializer_class = DailyReportSerializer

    def get_queryset(self):

        user = self.request.user

        if user.role in ['ADMIN', 'TECHNICIAN']:

            return DailyReport.objects.all()

        elif user.role == 'DRIVER':

            return DailyReport.objects.filter(driver=user)

        return DailyReport.objects.none()

    def get_permissions(self):

        if self.action == 'create':

            self.permission_classes = [IsAuthenticated, IsDriver]

        elif self.action in ['update', 'partial_update', 'destroy']:

            self.permission_classes = [IsAuthenticated, IsAdmin]

        else:

            self.permission_classes = [IsAuthenticated]

        return super().get_permissions()

    def perform_create(self, serializer):

        serializer.save(driver=self.request.user)

        vehicle = serializer.validated_data['vehicle']

        SystemLog.objects.create(action=f"Daily report submitted by {self.request.user.username} for vehicle {vehicle.plate_number}")

class WeeklyReportViewSet(viewsets.ModelViewSet):

    queryset = WeeklyReport.objects.all()
    serializer_class = WeeklyReportSerializer

    def get_queryset(self):

        user = self.request.user

        if user.role in ['ADMIN', 'TECHNICIAN']:

            return WeeklyReport.objects.all()

        elif user.role == 'DRIVER':

            return WeeklyReport.objects.filter(driver=user)

        return WeeklyReport.objects.none()

    def get_permissions(self):

        if self.action == 'create':

            self.permission_classes = [IsAuthenticated, IsDriver]

        elif self.action in ['update', 'partial_update', 'destroy']:

            self.permission_classes = [IsAuthenticated, IsAdmin]

        else:

            self.permission_classes = [IsAuthenticated]

        return super().get_permissions()

    def perform_create(self, serializer):

        serializer.save(driver=self.request.user)

        vehicle = serializer.validated_data['vehicle']

        SystemLog.objects.create(action=f"Weekly report submitted by {self.request.user.username} for vehicle {vehicle.plate_number}")
