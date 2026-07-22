from rest_framework import serializers
from .models import Attendance


class AttendanceSerializer(serializers.ModelSerializer):

    student_nom = serializers.CharField(
        source="student.nom",
        read_only=True
    )

    student_prenom = serializers.CharField(
        source="student.prenom",
        read_only=True
    )


    class Meta:

        model = Attendance

        fields = [
    "id",
    "student",
    "student_nom",
    "student_prenom",
    "date",
    "statut",
    "motif",
    "motif_parent",
    "reponse_recue",
    "date_reponse",
    "date_creation"
]