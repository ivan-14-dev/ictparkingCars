from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response


class CustomTokenObtainPairView(TokenObtainPairView):
    """
    Custom token obtain view that includes user information in the response
    """

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
                'employee_id': user.employee_id,
                'date_joined': user.date_joined.isoformat(),
                'last_login': user.last_login.isoformat() if user.last_login else None,
            }

            response.data['user'] = user_data

        return response
