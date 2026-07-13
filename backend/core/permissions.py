from rest_framework.permissions import BasePermission

class IsAdminTeacherOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False

        # éviter crash si profile n'existe pas
        profile = getattr(request.user, 'profile', None)
        if not profile:
            return False

        # ADMIN → tout accès
        if profile.role == 'admin':
            return True

        # TEACHER → lecture + modification
        if profile.role == 'teacher':
            return request.method in ['GET', 'POST', 'PUT', 'PATCH']

        # STUDENT → lecture seule
        if profile.role == 'student':
            return request.method == 'GET'

        return False