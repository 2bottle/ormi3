from django.urls import path
from . import views

urlpatterns = [
    path('', views.qna, name='qna'),
    path('<int:pk>/', views.detail, name='detail'),
]