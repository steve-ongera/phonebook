from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Group, Contact, ContactNote
from .serializers import GroupSerializer, ContactSerializer, ContactNoteSerializer

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['group']
    search_fields = ['first_name', 'last_name', 'phone_number', 'email']
    ordering_fields = ['first_name', 'last_name', 'created_at']
    
    @action(detail=True, methods=['get'])
    def notes(self, request, pk=None):
        contact = self.get_object()
        notes = contact.notes.all()
        serializer = ContactNoteSerializer(notes, many=True)
        return Response(serializer.data)

class ContactNoteViewSet(viewsets.ModelViewSet):
    queryset = ContactNote.objects.all()
    serializer_class = ContactNoteSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['contact']