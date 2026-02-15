from django.core.management.base import BaseCommand
from phone_app.models import Group, Contact, ContactNote
import random

class Command(BaseCommand):
    help = "Seed database with real Kenyan contact data"

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.SUCCESS("Seeding data..."))

        # Clear existing data (optional)
        ContactNote.objects.all().delete()
        Contact.objects.all().delete()
        Group.objects.all().delete()

        # Kenyan Groups
        groups = [
            {"name": "Family", "description": "Immediate and extended family members"},
            {"name": "Work - Nairobi", "description": "Colleagues from Nairobi office"},
            {"name": "Mosque - Murang'a", "description": "Mosque members"},
            {"name": "University Friends", "description": "Friends from university"},
            {"name": "Business Contacts", "description": "Suppliers and partners"},
        ]

        created_groups = []
        for group in groups:
            g = Group.objects.create(**group)
            created_groups.append(g)

        # Kenyan Contacts
        kenyan_contacts = [
            ("Brian", "Mwangi"),
            ("Faith", "Wanjiku"),
            ("Kevin", "Ochieng"),
            ("Mercy", "Akinyi"),
            ("David", "Kiptoo"),
            ("Anne", "Njeri"),
            ("Samuel", "Otieno"),
            ("Esther", "Nyambura"),
            ("Dennis", "Mutua"),
            ("Lilian", "Chebet"),
        ]

        for first, last in kenyan_contacts:
            contact = Contact.objects.create(
                first_name=first,
                last_name=last,
                phone_number=f"07{random.randint(10000000, 99999999)}",
                email=f"{first.lower()}.{last.lower()}@gmail.com",
                address=random.choice([
                    "Nairobi, Kenya",
                    "Murang'a, Kenya",
                    "Kisumu, Kenya",
                    "Mombasa, Kenya",
                    "Eldoret, Kenya"
                ]),
                group=random.choice(created_groups)
            )

            # Add 1–3 notes per contact
            for _ in range(random.randint(1, 3)):
                ContactNote.objects.create(
                    contact=contact,
                    note=random.choice([
                        "Met at a business networking event in Nairobi.",
                        "Classmate from university days.",
                        "Mosque member from Murang'a.",
                        "Supplier for office equipment.",
                        "Family friend from Kisumu."
                    ])
                )

        self.stdout.write(self.style.SUCCESS("Kenyan seed data inserted successfully!"))
