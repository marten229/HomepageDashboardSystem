from django.shortcuts import render
from RestaurantManagement.models import Restaurant

def home(request):
    restaurants = Restaurant.objects.all()
    return render(request, 'home.html', {'restaurants': restaurants})