from django.shortcuts import render, redirect
from .models import *
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages


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
    return render(request, 'services.html')


def past_programs(request):
    past_programs = Program.objects.filter(past=True)
    upcoming_programs = Program.objects.filter(upcoming=True)
    params = {
        'past_programs': past_programs,
        'upcoming_programs': upcoming_programs,
    }
    return render(request, 'past_programs.html', params)


def community_programs(request):
    community_programs = Program.objects.filter(community=True)
    return render(request, 'community_programs.html', {'community_programs': community_programs})


def contact(request):
    if request.method == "POST":
        full_name = request.POST.get('full_name')
        client_email = request.POST.get('email')
        country = request.POST.get('country')
        state = request.POST.get('state')
        org_name = request.POST.get('org_name')
        phone_number = request.POST.get('phone')
        message = request.POST.get('query')
        mail_subject = f"LearnHill Query: from '{full_name}'"
        message += f"\n\nClient Email: {client_email}\nClient Phone: {phone_number}\nState: {state}\nCountry: {country}\nOrganization Name: {org_name}"
        to_email = settings.EMAIL_HOST_USER

        print(message)

        send_mail(
            subject=mail_subject,
            message=message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[to_email],
            fail_silently=False,
        )
        ContactMessage.objects.create(full_name=full_name, email=client_email, country=country, state=state, org_name=org_name, mobile_number=phone_number, message=message)
        messages.success(request, "Your Query has been Recorded")
        # return redirect('/')
    return render(request, 'contact.html')


def blog(request):
    blogs = Blog.objects.all()
    return render(request, 'blog.html', {'blogs': blogs})


def blog_details(request, blog_id):
    blog_details = Blog.objects.get(id=blog_id)
    categories = [cat.name for cat in blog_details.category.all()]
    related_blogs = Blog.objects.filter(category__name__in=categories).exclude(id=blog_id).order_by('-updated_at', '-created_at').distinct()[:3]

    return render(request, 'blog_details.html', {'blog_details': blog_details, 'related_blogs': related_blogs})