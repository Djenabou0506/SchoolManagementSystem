from rest_framework import viewsets
from .models import Classe
from .serializers import ClasseSerializer


class ClasseViewSet(viewsets.ModelViewSet):

    queryset = Classe.objects.all()
    serializer_class = ClasseSerializer