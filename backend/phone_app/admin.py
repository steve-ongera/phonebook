from django.contrib import admin
from .models import Group, Contact, ContactNote

@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    list_display = ['name', 'created_at']
    search_fields = ['name']

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'phone_number', 'email', 'group', 'created_at']
    list_filter = ['group', 'created_at']
    search_fields = ['first_name', 'last_name', 'phone_number', 'email']

@admin.register(ContactNote)
class ContactNoteAdmin(admin.ModelAdmin):
    list_display = ['contact', 'note', 'created_at']
    list_filter = ['created_at']