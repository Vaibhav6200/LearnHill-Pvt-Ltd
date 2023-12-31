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
    name = models.CharField(max_length=250, help_text="Name of the Partner")
    logo = models.ImageField(upload_to='partner_logos')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Program(models.Model):
    heading = models.CharField(max_length=255)
    description = models.TextField()
    schools_participated = models.CharField(max_length=10, blank=True, null=True)
    students_trained = models.CharField(max_length=10, blank=True, null=True)
    teachers_trained = models.CharField(max_length=10, blank=True, null=True)
    district_participated = models.CharField(max_length=10, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    state_image = models.ImageField(upload_to='state_images', help_text="upload image of state for past program page")
    partner = models.ManyToManyField(Partner, blank=True)
    objective = RichTextField(blank=True, null=True)
    action = RichTextField(blank=True, null=True)
    impact = models.TextField(blank=True, null=True)
    image1 = models.ImageField(upload_to='project_image', help_text="primary image: PUT a Square Image Here")
    image2 = models.ImageField(upload_to='project_image', help_text="secondary image for past program page")
    image3 = models.ImageField(upload_to='project_image', help_text="secondary image for past program page")
    image4 = models.ImageField(upload_to='project_image', blank=True, null=True, help_text="Extra Image to Adjust Past Program Page")
    image5 = models.ImageField(upload_to='project_image', blank=True, null=True, help_text="Extra Image to Adjust Past Program Page")
    image6 = models.ImageField(upload_to='project_image', blank=True, null=True, help_text="Extra Image to Adjust Past Program Page")
    hash_color_text = models.CharField(max_length=10, blank=True, null=True)
    hash_color_background = models.CharField(max_length=10, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField()
    past = models.BooleanField()
    upcoming = models.BooleanField()
    community = models.BooleanField()
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


class ContactMessage(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=150)
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    org_name = models.CharField(max_length=255)
    mobile_number = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)