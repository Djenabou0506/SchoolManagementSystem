
from django.contrib import admin
from .models import Classe

@admin.register(Classe)
class ClasseAdmin(admin.ModelAdmin):

    list_display = [
        "id",
        "nom",
        "annee_scolaire",
        "teacher"
    ]