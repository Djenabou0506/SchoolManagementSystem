from rest_framework import viewsets
from .models import Subject
from .serializers import SubjectSerializer


class SubjectViewSet(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()

    def get_queryset(self):
        user = self.request.user
        profile = getattr(user, 'profile', None)

        # si pas connecté
        if not user.is_authenticated:
            return Subject.objects.none()

        # ADMIN / TEACHER / STUDENT → tous voient les matières (pour l'instant)
        if profile and profile.role in ['admin', 'teacher', 'student']:
            return Subject.objects.all()

        return Subject.objects.none()
