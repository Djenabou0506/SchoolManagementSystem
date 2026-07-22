from django.urls import path
from .views import BulletinListView, BulletinView


urlpatterns = [

    path(
        "",
        BulletinListView.as_view()
    ),

    path(
        "<int:id>/",
        BulletinView.as_view()
    ),

]