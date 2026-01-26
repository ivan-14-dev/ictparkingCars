from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model, authenticate
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from . import serializers

User = get_user_model()


class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserRegistrationSerializer
    permission_classes = [AllowAny]


class UserProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = serializers.UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserListSerializer
    permission_classes = [IsAuthenticated]


class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserCreateSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # Only admins can create users
        if not self.request.user.role == 'admin':
            raise serializers.ValidationError("Only administrators can create user accounts")
        serializer.save()


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserUpdateSerializer
    permission_classes = [IsAuthenticated]

    def perform_update(self, serializer):
        # Only admins can update users
        if not self.request.user.role == 'admin':
            raise serializers.ValidationError("Only administrators can update user accounts")
        serializer.save()

    def perform_destroy(self, instance):
        # Only admins can delete users
        if not self.request.user.role == 'admin':
            raise serializers.ValidationError("Only administrators can delete user accounts")
        instance.delete()


@api_view(['POST'])
@permission_classes([AllowAny])
def user_login(request):
    """Custom login view that returns JWT tokens"""
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response(
            {'error': 'Please provide both username and password'},
            status=status.HTTP_400_BAD_REQUEST
        )

    user = authenticate(username=username, password=password)

    if user is None:
        return Response(
            {'error': 'Invalid credentials'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    if not user.is_active:
        return Response(
            {'error': 'Account is disabled'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    refresh = RefreshToken.for_user(user)
    user_serializer = serializers.UserProfileSerializer(user)

    return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        'user': user_serializer.data
    })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    """Logout view - blacklist the refresh token"""
    try:
        refresh_token = request.data.get('refresh')
        if refresh_token:
            token = RefreshToken(refresh_token)
            token.blacklist()
        return Response({'message': 'Successfully logged out'})
    except Exception as e:
        return Response(
            {'error': 'Invalid token'},
            status=status.HTTP_400_BAD_REQUEST
        )
