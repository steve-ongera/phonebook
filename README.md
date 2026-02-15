# MASAI PHONEBOOK - QUICK START GUIDE

## 🚀 Setup Instructions

### Backend Setup (Terminal 1)
```bash
cd masai_phonebook/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup database
python manage.py makemigrations
python manage.py migrate

# Create admin user (optional)
python manage.py createsuperuser

# Run server
python manage.py runserver
```
✅ Backend running at: http://localhost:8000
✅ Admin panel: http://localhost:8000/admin

### Frontend Setup (Terminal 2)
```bash
cd masai_phonebook/frontend

# Install dependencies
npm install

# Start React app
npm start
```
✅ Frontend running at: http://localhost:3000

---

## 📁 Project Overview

**3 Django Models:**
1. **Group** - Categorize contacts (Family, Friends, Work, etc.)
2. **Contact** - Store contact details (name, phone, email, etc.)
3. **ContactNote** - Add notes/reminders for each contact

**Key Features:**
- ✅ Full CRUD for all models
- ✅ Search contacts by name/phone/email
- ✅ Filter contacts by group
- ✅ Add unlimited notes to contacts
- ✅ Responsive design
- ✅ RESTful API with DRF

---

## 🔗 API Testing

### Groups
```
GET    /api/groups/          - List all groups
POST   /api/groups/          - Create group
GET    /api/groups/1/        - Get group
PUT    /api/groups/1/        - Update group
DELETE /api/groups/1/        - Delete group
```

### Contacts
```
GET    /api/contacts/        - List contacts (supports ?search=john&group=1)
POST   /api/contacts/        - Create contact
GET    /api/contacts/1/      - Get contact
PUT    /api/contacts/1/      - Update contact
DELETE /api/contacts/1/      - Delete contact
```

### Notes
```
GET    /api/notes/?contact=1 - List notes for contact
POST   /api/notes/           - Create note
DELETE /api/notes/1/         - Delete note
```

---

## 📦 Files Created

### Backend (Django)
- `models.py` - 3 models: Group, Contact, ContactNote
- `serializers.py` - DRF serializers with nested data
- `views.py` - ViewSets with search/filter
- `urls.py` - DRF router configuration
- `admin.py` - Admin interface
- `settings.py` - CORS, DRF, pagination config
- `requirements.txt` - Python dependencies

### Frontend (React)
- `App.js` - Main component with React Router
- `ContactList.js` - List view with search/filter
- `ContactForm.js` - Create/edit modal form
- `ContactDetail.js` - Single contact with notes
- `GroupList.js` - Groups management
- `GroupForm.js` - Group create/edit
- `api.js` - Axios service for API calls
- `App.css` - Complete styling
- `package.json` - React dependencies

---

## 💡 Usage Tips

1. **Start with Groups**: Create groups like "Family", "Work", "Friends"
2. **Add Contacts**: Create contacts and assign them to groups
3. **Add Notes**: Click on a contact to add notes/reminders
4. **Search**: Use the search bar to find contacts quickly
5. **Filter**: Use group dropdown to filter contacts

---

## 🛠️ Tech Stack

**Backend:**
- Django 5.0
- Django REST Framework
- Django CORS Headers
- Django Filter
- SQLite database

**Frontend:**
- React 18
- React Router DOM v6
- Axios
- Vanilla CSS

---

## 📝 Sample API Requests

### Create Group
```json
POST /api/groups/
{
  "name": "Family",
  "description": "Family members"
}
```

### Create Contact
```json
POST /api/contacts/
{
  "first_name": "John",
  "last_name": "Doe",
  "phone_number": "+1234567890",
  "email": "john@example.com",
  "address": "123 Main St",
  "group": 1
}
```

### Create Note
```json
POST /api/notes/
{
  "contact": 1,
  "note": "Remember to call about birthday party"
}
```

---

## 🎯 Practice Goals

This project helps you practice:
- ✅ Django REST Framework ViewSets
- ✅ Serializers with nested relationships
- ✅ CORS configuration
- ✅ Search & filtering with DRF
- ✅ React hooks (useState, useEffect)
- ✅ React Router for navigation
- ✅ Axios for API calls
- ✅ CRUD operations in React
- ✅ Form handling
- ✅ Component composition

Happy Coding! 🚀