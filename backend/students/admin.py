from django.contrib import admin
from .models import Student
from .models import Profile

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('prenom', 'nom', 'date_naissance', 'sexe', 'telephone', 'date_creation')
    search_fields = ('prenom', 'nom', 'telephone')

admin.site.register(Profile)