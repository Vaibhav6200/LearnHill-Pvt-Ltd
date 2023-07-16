from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def lms(request):
    return render(request, 'lms.html')


def programs(request):
    return render(request, 'programs.html')


def past_programs(request):
    return render(request, 'past_programs.html')


def community_projects(request):
    return render(request, 'community_projects.html')


def contact(request):
    return render(request, 'contact.html')


def blog(request):
    return render(request, 'blog.html')


def blog_details(request):
    return render(request, 'blog_details.html')