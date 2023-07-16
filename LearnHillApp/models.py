from django.db import models


class statistic(models.Model):
    states_covered = models.SmallIntegerField()
    schools = models.SmallIntegerField()
    teachers_trained = models.SmallIntegerField()
    students_impacted = models.SmallIntegerField()
    employment_generated = models.SmallIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class partner(models.Model):
    name = models.CharField(help_text="Name of the Partner",max_length=250)
    logo = models.ImageField(upload_to='partner_logos')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class program(models.Model):
    heading = models.CharField(max_length=255)
    subheading = models.CharField(max_length=255)
    description = models.TextField()
    project_year = models.DateField()
    location = models.CharField(max_length=255)
    students_impacted = models.SmallIntegerField()
    school_reached = models.SmallIntegerField()
    action = models.TextField()
    impact = models.TextField()
    Past = models.BooleanField()
    Upcoming = models.BooleanField()
    partner = models.ForeignKey(partner, on_delete=models.CASCADE)
    image1 = models.ImageField(upload_to='project_image')
    image2 = models.ImageField(upload_to='project_image')
    image3 = models.ImageField(upload_to='project_image')
    image4 = models.ImageField(upload_to='project_image')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # supported_by (can be multiple partners)


