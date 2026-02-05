from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from .permissions import IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
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


class UserSelfUpdateView(generics.UpdateAPIView):
    serializer_class = serializers.UserSelfUpdateSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def get_object(self):
        return self.request.user


class UserListView(generics.ListAPIView):
    serializer_class = serializers.UserListSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Admins can see all users, others can only see driver list
        if self.request.user.role == 'admin':
            return User.objects.all()
        else:
            # Non-admins can only see active drivers (for driver assignment)
            return User.objects.filter(role='driver', is_active=True)


class DriverListView(generics.ListAPIView):
    queryset = User.objects.filter(role='driver', is_active=True)
    serializer_class = serializers.UserListSerializer
    permission_classes = [IsAuthenticated]


class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserCreateSerializer
    permission_classes = [IsAdminUser]
    parser_classes = [MultiPartParser, FormParser]

    def create(self, request, *args, **kwargs):
        import logging
        logger = logging.getLogger(__name__)
        logger.warning(f"UserCreateView.create() called")
        logger.warning(f"  Request user: {request.user}")
        logger.warning(f"  User role: {request.user.role}")
        logger.warning(f"  Request data: {request.data}")
        logger.warning(f"  Request files: {request.FILES}")
        
        try:
            response = super().create(request, *args, **kwargs)
            logger.warning(f"User created successfully: {response.data}")
            return response
        except Exception as e:
            logger.error(f"User creation failed: {type(e).__name__}: {str(e)}")
            # Return a more detailed error response
            import traceback
            logger.error(traceback.format_exc())
            raise


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserUpdateSerializer
    permission_classes = [IsAdminUser]
    parser_classes = [MultiPartParser, FormParser]

    def update(self, request, *args, **kwargs):
        import logging
        logger = logging.getLogger(__name__)
        logger.warning(f"UserDetailView.update() called for user {kwargs.get('pk')}")
        logger.warning(f"  Request user: {request.user}")
        logger.warning(f"  User role: {request.user.role}")
        logger.warning(f"  Request data: {request.data}")
        logger.warning(f"  Request files: {request.FILES}")
        
        try:
            response = super().update(request, *args, **kwargs)
            logger.warning(f"Update successful: {response.data}")
            return response
        except Exception as e:
            logger.error(f"Update failed with exception: {type(e).__name__}: {str(e)}")
            raise

    def perform_update(self, serializer):
        serializer.save()


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
