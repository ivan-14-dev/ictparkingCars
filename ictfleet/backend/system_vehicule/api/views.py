from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from django.utils import timezone
from . import serializers
from .models import MaintenanceHistory, Activity, Breakdown, RepairRecord
from users.permissions import IsAdminUser


class CustomTokenObtainPairView(TokenObtainPairView):
    """
    Custom token obtain view that includes user information in the response
    """
    serializer_class = serializers.CustomTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        if response.status_code == 200:
            # Get the user from the validated data
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = serializer.user

            # Add user information to the response
            user_data = {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'role': user.role,
                'department': user.department,
                'phone_number': user.phone_number,
                'date_joined': user.date_joined.isoformat(),
                'last_login': user.last_login.isoformat() if user.last_login else None,
            }

            response.data['user'] = user_data

        return response


class MaintenanceListView(generics.ListAPIView):
    queryset = MaintenanceHistory.objects.all().order_by('-service_date')
    serializer_class = serializers.MaintenanceSerializer
    permission_classes = [IsAdminUser]


class ActivityListView(generics.ListAPIView):
    """View to list all activities"""
    serializer_class = serializers.ActivitySerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Return activities ordered by creation date"""
        queryset = Activity.objects.all().order_by('-created_at')
        
        # Filter by activity type if provided
        activity_type = self.request.query_params.get('activity_type')
        if activity_type:
            queryset = queryset.filter(activity_type=activity_type)
        
        # Filter by user if provided
        user_id = self.request.query_params.get('user_id')
        if user_id:
            queryset = queryset.filter(user_id=user_id)
        
        # Limit to recent activities
        limit = self.request.query_params.get('limit')
        if limit:
            try:
                queryset = queryset[:int(limit)]
            except ValueError:
                pass
        
        return queryset


class ActivityCreateView(generics.CreateAPIView):
    """View to create activities"""
    serializer_class = serializers.ActivityCreateSerializer
    permission_classes = [IsAuthenticated]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class RecentActivityView(generics.ListAPIView):
    """View to get recent activities for the dashboard"""
    serializer_class = serializers.ActivitySerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Return recent activities, more for admins"""
        user = self.request.user
        queryset = Activity.objects.all().order_by('-created_at')
        
        # Limit to 20 activities for the dashboard
        return queryset[:20]


class BreakdownListView(generics.ListAPIView):
    """View to list breakdowns"""
    serializer_class = serializers.BreakdownSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Admins see all breakdowns, mechanics see only their own"""
        user = self.request.user
        if user.role == 'admin':
            return Breakdown.objects.all()
        else:
            return Breakdown.objects.filter(mechanic=user)


class BreakdownCreateView(generics.CreateAPIView):
    """View to create breakdown reports"""
    serializer_class = serializers.BreakdownCreateSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    
    def get_queryset(self):
        return Breakdown.objects.all()

    def perform_create(self, serializer):
        """Automatically set the mechanic from the authenticated user"""
        serializer.save(mechanic=self.request.user)


class BreakdownDetailView(generics.RetrieveUpdateDestroyAPIView):
    """View to retrieve, update, or delete a breakdown"""
    serializer_class = serializers.BreakdownSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    
    def get_queryset(self):
        """Admins can see all, mechanics can only see their own"""
        user = self.request.user
        if user.role == 'admin':
            return Breakdown.objects.all()
        else:
            return Breakdown.objects.filter(mechanic=user)


class RepairRecordListView(generics.ListAPIView):
    """View to list repair records"""
    serializer_class = serializers.RepairRecordSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Admins see all records, mechanics see only their own"""
        user = self.request.user
        if user.role == 'admin':
            return RepairRecord.objects.all()
        else:
            return RepairRecord.objects.filter(mechanic=user)


class RepairRecordCreateView(generics.CreateAPIView):
    """View to create repair records"""
    serializer_class = serializers.RepairRecordCreateSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    
    def get_queryset(self):
        return RepairRecord.objects.all()


class RepairRecordDetailView(generics.RetrieveUpdateDestroyAPIView):
    """View to retrieve, update, or delete a repair record"""
    serializer_class = serializers.RepairRecordSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    
    def get_queryset(self):
        """Admins can see all, mechanics can only see their own"""
        user = self.request.user
        if user.role == 'admin':
            return RepairRecord.objects.all()
        else:
            return RepairRecord.objects.filter(mechanic=user)
    
    def perform_update(self, serializer):
        """Allow admin to set reviewed_by and reviewed_at"""
        user = self.request.user
        if user.role == 'admin' and serializer.validated_data.get('status') in ['reviewed', 'approved', 'rejected']:
            serializer.save(reviewed_by=user, reviewed_at=timezone.now())
        else:
            serializer.save()


