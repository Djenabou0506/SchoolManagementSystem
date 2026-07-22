from django.db import models
from students.models import Student


class Attendance(models.Model):

    STATUS_CHOICES = [
        ("Absent", "Absent"),
        ("Présent", "Présent"),
    ]


    student = models.ForeignKey(
        Student,
        on_delete=models.CASCADE
    )


    date = models.DateField()


    statut = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES
    )


    motif = models.TextField(
        blank=True,
        null=True
    )


    motif_parent = models.TextField(
        blank=True,
        null=True
    )


    reponse_recue = models.BooleanField(
        default=False
    )


    date_reponse = models.DateTimeField(
        blank=True,
        null=True
    )


    date_creation = models.DateTimeField(
        auto_now_add=True
    )


    def __str__(self):
        return f"{self.student} - {self.date}"