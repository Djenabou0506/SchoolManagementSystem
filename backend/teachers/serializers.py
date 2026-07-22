from rest_framework import serializers
from .models import Teacher


class TeacherSerializer(serializers.ModelSerializer):

    subject_nom = serializers.CharField(
        source="subject.nom",
        read_only=True
    )

    class Meta:
        model = Teacher
        fields = [
            "id",
            "prenom",
            "nom",
            "specialite",
            "telephone",
            "subject",
            "subject_nom",
        ]