from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Student
from .serializers import StudentSerializer
from .permissions import IsAdminOrReadOnly


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        profile = getattr(user, 'profile', None)

        # non connecté
        if not user.is_authenticated:
            return Student.objects.none()

        # ADMIN → tout voir
        if profile and profile.role == 'admin':
            return Student.objects.all()

        # TEACHER → tout voir (temporaire)
        if profile and profile.role == 'teacher':
            return Student.objects.all()

        # STUDENT → seulement ses données
        if profile and profile.role == 'student':
            return Student.objects.filter(user=user)

        return Student.objects.none()

from rest_framework.permissions import AllowAny


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [AllowAny]