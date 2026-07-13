from rest_framework import serializers
from .models import Student


class StudentSerializer(serializers.ModelSerializer):

    classe_nom = serializers.StringRelatedField(
        source="classe",
        read_only=True
    )

    class Meta:
        model = Student
        fields = [
            "id",
            "prenom",
            "nom",
            "date_naissance",
            "sexe",
            "telephone",
            "user",
            "classe",
            "classe_nom",
            "date_creation",
        ]