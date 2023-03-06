from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
# Create your views here.

def home_view(request):
    return render(request,'base.html')

def instrucoes(request):
    return render(request, 'instrucoes.html')

def definicoes(request):
    return render(request, 'definicoes.html')

def condicoes(request):
    return render(request, 'condicoes.html')

def imagens(request):
    return render(request, 'imagens.html')