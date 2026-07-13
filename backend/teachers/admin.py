from django.contrib import admin
from .models import Teacher

@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ('prenom', 'nom', 'specialite', 'telephone', 'date_creation')
    search_fields = ('prenom', 'nom', 'specialite')