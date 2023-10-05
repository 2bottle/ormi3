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


def product(request):
    return render(request, 'product.html')

def detail(request, pk):
    if db.get(pk):
        return render(request, 'detail.html', {'detail': db.get(pk)})
