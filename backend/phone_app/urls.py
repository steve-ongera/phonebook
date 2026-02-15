from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GroupViewSet, ContactViewSet, ContactNoteViewSet

router = DefaultRouter()
router.register(r'groups', GroupViewSet)
router.register(r'contacts', ContactViewSet)
router.register(r'notes', ContactNoteViewSet)

urlpatterns = [
    path('', include(router.urls)),
]