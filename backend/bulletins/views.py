from rest_framework.views import APIView
from rest_framework.response import Response
from students.models import Student
from .serializers import BulletinSerializer



class BulletinListView(APIView):

    def get(self, request):

        students = Student.objects.all()

        serializer = BulletinSerializer(
            students,
            many=True
        )

        return Response(serializer.data)



class BulletinView(APIView):

    def get(self, request, id):

        student = Student.objects.get(id=id)

        serializer = BulletinSerializer(student)

        return Response(serializer.data)