from rest_framework import viewsets
from .models import Classe
from .serializers import ClasseSerializer


class ClasseViewSet(viewsets.ModelViewSet):
    serializer_class = ClasseSerializer
    queryset = Classe.objects.all()

    def get_queryset(self):
        user = self.request.user
        profile = getattr(user, 'profile', None)

        # si non connecté
        if not user.is_authenticated:
            return Classe.objects.none()

        # ADMIN → tout voir
        if profile and profile.role == 'admin':
            return Classe.objects.all()

        # TEACHER → peut voir les classes
        if profile and profile.role == 'teacher':
            return Classe.objects.all()

        # STUDENT → peut voir les classes (lecture seulement)
        if profile and profile.role == 'student':
            return Classe.objects.all()

        return Classe.objects.none()
    
