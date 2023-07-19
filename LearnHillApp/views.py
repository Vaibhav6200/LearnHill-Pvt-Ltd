from django.shortcuts import render
from .models import *


def index(request):
    statistics = Statistic.objects.all()[0]
    partners = Partner.objects.all()
    past_programs = Program.objects.filter(past=True)
    params = {
        'statistics': statistics,
        'partners': partners,
        'past_programs': past_programs,
    }

    return render(request, 'index.html', params)


def lms(request):
    return render(request, 'lms.html')


def programs(request):
    return render(request, 'programs.html')


def past_programs(request):
    past_programs = Program.objects.filter(past=True)
    upcoming_programs = Program.objects.filter(upcoming=True)
    params = {
        'past_programs': past_programs,
        'upcoming_programs': upcoming_programs,
    }
    return render(request, 'past_programs.html', params)


def community_programs(request):
    return render(request, 'community_programs.html')


def contact(request):
    return render(request, 'contact.html')


def blog(request):
    blogs = Blog.objects.all()
    return render(request, 'blog.html', {'blogs': blogs})


def blog_details(request, blog_id):
    blog_details = Blog.objects.get(id=blog_id)
    categories = [cat.name for cat in blog_details.category.all()]
    related_blogs = Blog.objects.filter(category__name__in=categories).exclude(id=blog_id).order_by('-updated_at', '-created_at').distinct()[:3]

    return render(request, 'blog_details.html', {'blog_details': blog_details, 'related_blogs': related_blogs})