from django.db import models
from teachers.models import Teacher


class Classe(models.Model):

    nom = models.CharField(max_length=100)
    niveau = models.CharField(max_length=50)
    annee_scolaire = models.CharField(max_length=20)

    teacher = models.ForeignKey(
        Teacher,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    def __str__(self):
        return f"{self.niveau} {self.nom}"