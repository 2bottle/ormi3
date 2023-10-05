from django.urls import path
from . import views

urlpatterns = [
    path('', views.notice, name= 'notice'),
    path('free/', views.free, name='free'),
    path('free/<int:pk>/', views.detail, name='detail'),
    path('onenone/', views.onenone, name='onenone'),
    path('onenone/<int:pk>/', views.detailone, name='detailone'),
]