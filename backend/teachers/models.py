from django.db import models
from subjects.models import Subject

class Teacher(models.Model):
    prenom = models.CharField(max_length=100)
    nom = models.CharField(max_length=100)
    specialite = models.CharField(max_length=100)
    telephone = models.CharField(max_length=20)

    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True, blank=True)

    date_creation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.prenom} {self.nom}"