from rest_framework import serializers
from .models import Parent


class ParentSerializer(serializers.ModelSerializer):

    student_nom = serializers.CharField(
        source="student.nom",
        read_only=True
    )

    student_prenom = serializers.CharField(
        source="student.prenom",
        read_only=True
    )


    class Meta:

        model = Parent

        fields = [
            "id",
            "student",
            "student_nom",
            "student_prenom",
            "nom",
            "prenom",
            "telephone",
            "relation",
            "date_creation"
        ]