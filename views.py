from django.shortcuts import render, get_object_or_404
from RestaurantManagement.models import Restaurant

def home(request):
    restaurants = Restaurant.objects.all()
    return render(request, 'home.html', {'restaurants': restaurants})


def dashboard_view(request):
    user = request.user
    restaurants = user.restaurants.all()
    return render(request, 'dashboard.html', {'restaurants': restaurants, 'user': user})

def dashboard_detail(request, pk):
    restaurant = get_object_or_404(Restaurant, pk=pk)
    return render(request, 'dashboard_detail.html', {'restaurant': restaurant})