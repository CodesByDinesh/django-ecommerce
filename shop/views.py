from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def shop(request):
    return render(request, 'products.html')

def cart(request):
    return render(request, 'cart.html')

def checkout(request):
    return render(request, 'checkout.html')

def order_confirmation(request):
    return render(request, 'order-confirmation.html')

def contact(request):
    return render(request, 'contact.html')

def search(request):
    return render(request, 'search.html')
