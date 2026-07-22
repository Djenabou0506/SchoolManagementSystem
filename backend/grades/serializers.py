from rest_framework import serializers
from .models import Grade


class GradeSerializer(serializers.ModelSerializer):

    student_nom = serializers.CharField(
        source="student.nom",
        read_only=True
    )

    student_prenom = serializers.CharField(
        source="student.prenom",
        read_only=True
    )

    subject_nom = serializers.CharField(
        source="subject.nom",
        read_only=True
    )


    class Meta:
        model = Grade

        fields = [
            "id",
            "student",
            "student_nom",
            "student_prenom",
            "subject",
            "subject_nom",
            "note",
            "semestre",
            "date_creation"
        ]