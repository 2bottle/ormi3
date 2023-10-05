from django.shortcuts import render

db = {
    1: {
        'title': '제목 1', 
        'contents': 'Post 1 body', 
        },
    2: {
        'title': '제목 2', 
        'contents': 'Post 2 body', 
        },
    3: {
        'title': '제목 3', 
        'contents': 'Post 3 body', 
        },
}

def notice(request):
    return render(request, 'notice.html')

def free(request):
    return render(request, 'free.html')

def detail(request, pk):
    if db.get(pk):
        return render(request, 'detailfree.html', {'detail': db.get(pk)})

def onenone(request):
    return render(request, 'onenone.html')

def detailone(request):
    if db.get(pk):
        return render(request, 'detailone.html', {'detail': db.get(pk)})
