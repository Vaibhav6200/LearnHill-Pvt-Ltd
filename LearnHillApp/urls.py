from django.urls import path, include
from . import views


app_name = 'LearnHillApp'

urlpatterns = [
    path('', views.index, name='index'),
    path('lms/',  views.lms, name='lms'),
    path('programs/',  views.programs, name='programs'),
    path('past_programs/',  views.past_programs, name='past_programs'),
    path('community_programs/',  views.community_programs, name='community_programs'),
    path('blog/',  views.blog, name='blog'),
    path('blog_details/<int:blog_id>',  views.blog_details, name='blog_details'),
    path('contact/',  views.contact, name='contact'),
]

