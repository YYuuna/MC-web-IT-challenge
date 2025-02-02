from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.views import APIView
import requests
from django.http import JsonResponse

class WeatherView(TemplateView):
    template_name = 'weather.html'

class WeatherAPI(APIView):
    def get(self, request):
        city = request.GET.get('city')
        url = f'http://api.weatherapi.com/v1/forecast.json?key=605831d7d95a4114836140754250202&q={city}&days=1&aqi=no&alerts=no'
        data = requests.get(url).json()
        return JsonResponse(data)