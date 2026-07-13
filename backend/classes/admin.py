from django.contrib import admin
from .models import Classe

@admin.register(Classe)
class ClasseAdmin(admin.ModelAdmin):
    list_display = ('nom', 'niveau', 'annee_scolaire')
    search_fields = ('nom',)