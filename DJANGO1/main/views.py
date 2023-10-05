from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'introduce.html')

def contact(request):
    return render(request, 'contact.html')
