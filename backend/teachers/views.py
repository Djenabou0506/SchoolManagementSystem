from rest_framework import viewsets
from .models import Teacher
from .serializers import TeacherSerializer


class TeacherViewSet(viewsets.ModelViewSet):
    serializer_class = TeacherSerializer
    queryset = Teacher.objects.all()

    def get_queryset(self):
        user = self.request.user
        profile = getattr(user, 'profile', None)

        # si non connecté
        if not user.is_authenticated:
            return Teacher.objects.none()

        # ADMIN → tout voir
        if profile and profile.role == 'admin':
            return Teacher.objects.all()

        # TEACHER → peut voir les enseignants (à améliorer plus tard)
        if profile and profile.role == 'teacher':
            return Teacher.objects.all()

        # STUDENT → lecture seulement
        if profile and profile.role == 'student':
            return Teacher.objects.all()

        return Teacher.objects.none()