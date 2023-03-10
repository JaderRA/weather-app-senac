from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
# Create your views here.

def home_view(request):
    return render(request,'home/home.html')

def definicoes(request):
    return render(request, 'definicoes/definicoes.html')

def condicoes(request):
    return render(request, 'condicoes-meteorologicas/condicoes-meteorologicas.html')

def instrucoes(request):
    return render(request, 'instrucoes/instrucoes.html')

#def imagens(request):
    #return render(request, 'imagens.html')