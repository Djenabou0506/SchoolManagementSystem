from rest_framework import serializers
from .models import Teacher


class TeacherSerializer(serializers.ModelSerializer):

    subject_nom = serializers.StringRelatedField(
        source="subject",
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
            "date_creation",
        ]