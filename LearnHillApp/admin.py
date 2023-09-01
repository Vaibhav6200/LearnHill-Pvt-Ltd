from django.contrib import admin
from .models import *


class StatisticAdmin(admin.ModelAdmin):
    list_display = ['id', 'states_covered', 'schools', 'teachers_trained', 'students_impacted', 'employment_generated', 'created_at', 'updated_at']

class PartnerAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'logo', 'created_at', 'updated_at']

class ProgramAdmin(admin.ModelAdmin):
    list_display = ['id', 'heading', 'start_date', 'end_date', 'students_trained', 'past', 'upcoming', 'community']
    list_display_links = ['id', 'heading']

class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['id', 'full_name', 'email', 'org_name', 'country', 'state']
    list_display_links = ['id', 'full_name']


admin.site.register(Statistic, StatisticAdmin)
admin.site.register(Partner, PartnerAdmin)
admin.site.register(Program, ProgramAdmin)
admin.site.register(Category)
admin.site.register(Blog)
admin.site.register(Profile)
admin.site.register(ContactMessage, ContactMessageAdmin)