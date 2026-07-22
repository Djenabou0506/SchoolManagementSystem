from django.db import models
from students.models import Student

# Create your models here.

class Parent(models.Model):

    RELATION_CHOICES = [
        ("Père", "Père"),
        ("Mère", "Mère"),
        ("Tuteur", "Tuteur"),
    ]


    student = models.ForeignKey(
        Student,
        on_delete=models.CASCADE,
        related_name="parents"
    )


    nom = models.CharField(
        max_length=100
    )


    prenom = models.CharField(
        max_length=100
    )


    telephone = models.CharField(
        max_length=20
    )


    relation = models.CharField(
        max_length=20,
        choices=RELATION_CHOICES
    )


    date_creation = models.DateTimeField(
        auto_now_add=True
    )


    def __str__(self):
        return f"{self.prenom} {self.nom}"