from django.db import models

# Create your models here.
from django.db import models

class Subject(models.Model):
    nom = models.CharField(max_length=100)
    coefficient = models.IntegerField()

    def __str__(self):
        return self.nom
