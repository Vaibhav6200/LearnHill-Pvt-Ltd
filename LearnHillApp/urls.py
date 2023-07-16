from django.urls import path, include
from . import views


app_name = 'LearnHillApp'

urlpatterns = [
    path('', views.index, name='index'),
    path('lms/',  views.lms, name='lms'),
    path('programs/',  views.programs, name='programs'),
    path('past_programs/',  views.past_programs, name='past_programs'),
    path('community_projects/',  views.community_projects, name='community_projects'),
    path('blog/',  views.blog, name='blog'),
    path('blog_details/',  views.blog_details, name='blog_details'),
    path('contact/',  views.contact, name='contact'),
]

