from django.contrib import admin
from .models import *


class StatisticAdmin(admin.ModelAdmin):
    list_display = ['id', 'states_covered', 'schools', 'teachers_trained', 'students_impacted', 'employment_generated', 'created_at', 'updated_at']

class PartnerAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'logo', 'created_at', 'updated_at']

class ProgramAdmin(admin.ModelAdmin):
    list_display = [field.name for field in program._meta.get_fields()]

admin.site.register(statistic, StatisticAdmin)
admin.site.register(partner, PartnerAdmin)
admin.site.register(program, ProgramAdmin)