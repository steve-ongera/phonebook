from rest_framework import serializers
from .models import Group, Contact, ContactNote

class GroupSerializer(serializers.ModelSerializer):
    contacts_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Group
        fields = ['id', 'name', 'description', 'created_at', 'contacts_count']
    
    def get_contacts_count(self, obj):
        return obj.contacts.count()

class ContactNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactNote
        fields = ['id', 'contact', 'note', 'created_at']

class ContactSerializer(serializers.ModelSerializer):
    notes = ContactNoteSerializer(many=True, read_only=True)
    group_name = serializers.CharField(source='group.name', read_only=True)
    
    class Meta:
        model = Contact
        fields = ['id', 'first_name', 'last_name', 'phone_number', 'email', 
                  'address', 'group', 'group_name', 'notes', 'created_at', 'updated_at']