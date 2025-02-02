from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('weather/', views.WeatherView.as_view(), name='weather'),
    path('weather_api/', views.WeatherAPI.as_view()),
]