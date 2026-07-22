from django.db import models
from django.db import models
from students.models import Student
from subjects.models import Subject

# Create your models here.
class Grade(models.Model):

    student = models.ForeignKey(
        Student,
        on_delete=models.CASCADE
    )

    subject = models.ForeignKey(
        Subject,
        on_delete=models.CASCADE
    )

    note = models.FloatField()

    semestre = models.CharField(
        max_length=20
    )

    date_creation = models.DateTimeField(
        auto_now_add=True
    )


    def __str__(self):
        return f"{self.student} - {self.subject}"