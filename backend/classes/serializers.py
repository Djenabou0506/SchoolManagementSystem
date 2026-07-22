from rest_framework import serializers
from .models import Classe


class ClasseSerializer(serializers.ModelSerializer):

    teacher_nom = serializers.CharField(
        source="teacher.nom",
        read_only=True
    )

    teacher_prenom = serializers.CharField(
        source="teacher.prenom",
        read_only=True
    )

    class Meta:
        model = Classe
        fields = [
            "id",
            "nom",
            "annee_scolaire",
            "teacher",
            "teacher_nom",
            "teacher_prenom",
        ]