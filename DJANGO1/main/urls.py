from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name= 'index'),
    path('about/', views.about, name= 'aoubt'),
    path('contact/', views.contact, name= 'contact'),
]