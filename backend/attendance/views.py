from rest_framework import viewsets
from .models import Attendance
from .serializers import AttendanceSerializer
from .sms import send_sms


class AttendanceViewSet(viewsets.ModelViewSet):

    queryset = Attendance.objects.all()

    serializer_class = AttendanceSerializer



    def perform_create(self, serializer):

        absence = serializer.save()


        if absence.statut == "Absent":


            parents = absence.student.parents.all()


            for parent in parents:


                message = f"""
Bonjour {parent.prenom} {parent.nom},

Votre enfant {absence.student.prenom} {absence.student.nom}
était absent le {absence.date}.

Merci de nous indiquer le motif de son absence.

École Management System
"""


                send_sms(
                    parent.telephone,
                    message
                )