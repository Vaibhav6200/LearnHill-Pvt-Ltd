from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField



class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="user_profile_images", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username


class Statistic(models.Model):
    states_covered = models.SmallIntegerField()
    schools = models.SmallIntegerField()
    teachers_trained = models.SmallIntegerField()
    students_impacted = models.SmallIntegerField()
    employment_generated = models.SmallIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Partner(models.Model):
    name = models.CharField(help_text="Name of the Partner",max_length=250)
    logo = models.ImageField(upload_to='partner_logos')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Program(models.Model):
    heading = models.CharField(max_length=255)
    subheading = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    location = models.CharField(max_length=255)
    students_impacted = models.SmallIntegerField()
    educators = models.SmallIntegerField()
    country_reached = models.SmallIntegerField()
    action = models.TextField()
    impact = models.TextField()
    past = models.BooleanField()
    upcoming = models.BooleanField()
    partner = models.ManyToManyField(Partner)
    image1 = models.ImageField(upload_to='project_image', blank=True, null=True, help_text="primary image")
    image2 = models.ImageField(upload_to='project_image', blank=True, null=True)
    image3 = models.ImageField(upload_to='project_image', blank=True, null=True)
    image4 = models.ImageField(upload_to='project_image', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Category(models.Model):
    class Meta:
        verbose_name_plural = "Categories"

    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name


class Blog(models.Model):
    title = models.CharField(max_length=255)
    body = RichTextField(blank=True, null=True)
    category = models.ManyToManyField(Category)
    author = models.ForeignKey(Profile, on_delete=models.CASCADE)
    card_image = models.ImageField(upload_to='blog_cards', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
