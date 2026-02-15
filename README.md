# 📱 MASAI PHONEBOOK APPLICATION
## Complete Django REST Framework + React Project

---

## 👨‍💻 Developer Information

**Name:** Steve Ongera  
**Phone:** +254 112 284 093  
**Email:** steveongera001@gmail.com  
**Role:** Software Lead Developer  
**Project Type:** Full-Stack Web Application (Practice Project)  
**Date Created:** February 2026  

---

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Complete Directory Structure](#complete-directory-structure)
3. [Detailed File Descriptions](#detailed-file-descriptions)
4. [Setup Instructions](#setup-instructions)
5. [API Documentation](#api-documentation)
6. [Component Architecture](#component-architecture)
7. [Database Schema](#database-schema)
8. [Testing Guide](#testing-guide)

---

## 🎯 Project Overview

A full-stack phonebook application built to practice REST API development and React frontend skills. The application allows users to manage contacts, organize them into groups, and add notes to individual contacts.

**Tech Stack:**
- **Backend:** Django 5.0, Django REST Framework 3.14
- **Frontend:** React 18, React Router DOM 6
- **Database:** SQLite3
- **API Communication:** Axios
- **Styling:** Vanilla CSS3

**Core Features:**
- ✅ Complete CRUD operations for Groups, Contacts, and Notes
- ✅ Advanced search and filtering capabilities
- ✅ RESTful API with proper serialization
- ✅ Responsive single-page application
- ✅ Modal-based forms for better UX
- ✅ Real-time search and filter
- ✅ Relationship management (Groups → Contacts → Notes)

---

## 📁 COMPLETE DIRECTORY STRUCTURE

```
masai_phonebook/
│
├── 📄 README.md                          # Main project documentation
├── 📄 DIRECTORY_STRUCTURE.txt            # This detailed structure file
├── 📄 QUICK_START.md                     # Quick setup guide
│
├── 📂 backend/                           # Django Backend Application
│   │
│   ├── 📄 .gitignore                     # Git ignore rules for Python/Django
│   ├── 📄 requirements.txt               # Python dependencies
│   ├── 📄 manage.py                      # Django management script
│   ├── 📄 db.sqlite3                     # SQLite database (created after migration)
│   │
│   ├── 📂 phonebook_project/             # Main Django Project Directory
│   │   ├── 📄 __init__.py                # Python package marker
│   │   ├── 📄 settings.py                # Django settings (INSTALLED_APPS, MIDDLEWARE, DATABASES, etc.)
│   │   ├── 📄 urls.py                    # Project-level URL routing
│   │   ├── 📄 wsgi.py                    # WSGI config for deployment
│   │   └── 📄 asgi.py                    # ASGI config (auto-generated)
│   │
│   └── 📂 phonebook_app/                 # Django Application Directory
│       ├── 📄 __init__.py                # Python package marker
│       ├── 📄 models.py                  # Database models (Group, Contact, ContactNote)
│       ├── 📄 serializers.py             # DRF serializers for API responses
│       ├── 📄 views.py                   # ViewSets for API endpoints
│       ├── 📄 urls.py                    # App-level URL routing with DRF router
│       ├── 📄 admin.py                   # Django admin configuration
│       ├── 📄 apps.py                    # App configuration (auto-generated)
│       ├── 📄 tests.py                   # Unit tests placeholder
│       └── 📂 migrations/                # Database migrations directory
│           └── 📄 __init__.py            # Python package marker
│
└── 📂 frontend/                          # React Frontend Application
    │
    ├── 📄 .gitignore                     # Git ignore rules for Node/React
    ├── 📄 package.json                   # NPM dependencies and scripts
    ├── 📄 package-lock.json              # NPM dependency lock file (auto-generated)
    ├── 📄 README.md                      # React app documentation
    │
    ├── 📂 public/                        # Static public assets
    │   ├── 📄 index.html                 # HTML template
    │   ├── 📄 favicon.ico                # Browser tab icon
    │   ├── 📄 manifest.json              # PWA manifest
    │   └── 📄 robots.txt                 # SEO robots file
    │
    ├── 📂 src/                           # React source code
    │   │
    │   ├── 📄 index.js                   # React app entry point
    │   ├── 📄 index.css                  # Global base styles
    │   ├── 📄 App.js                     # Main App component with routing
    │   ├── 📄 App.css                    # Main application styles
    │   ├── 📄 App.test.js                # App component tests
    │   ├── 📄 setupTests.js              # Test configuration
    │   ├── 📄 reportWebVitals.js         # Performance monitoring
    │   │
    │   ├── 📂 components/                # React Components
    │   │   ├── 📄 ContactList.js         # Display all contacts with search/filter
    │   │   ├── 📄 ContactForm.js         # Create/Edit contact modal form
    │   │   ├── 📄 ContactDetail.js       # Single contact view with notes management
    │   │   ├── 📄 GroupList.js           # Display all groups
    │   │   └── 📄 GroupForm.js           # Create/Edit group modal form
    │   │
    │   └── 📂 services/                  # API Services
    │       └── 📄 api.js                 # Axios API client with all endpoints
    │
    └── 📂 node_modules/                  # NPM packages (auto-generated, not in git)
```

---

## 📝 DETAILED FILE DESCRIPTIONS

### 🔧 Backend Files

#### 1. **backend/requirements.txt**
```
Purpose: Python package dependencies
Contents:
  - Django==5.0
  - djangorestframework==3.14.0
  - django-cors-headers==4.3.1
  - django-filter==23.5
```

#### 2. **backend/manage.py**
```
Purpose: Django command-line utility
Usage:
  - python manage.py runserver        # Start development server
  - python manage.py makemigrations   # Create migration files
  - python manage.py migrate          # Apply migrations
  - python manage.py createsuperuser  # Create admin user
```

#### 3. **backend/phonebook_project/settings.py**
```
Purpose: Django project configuration
Key Settings:
  - INSTALLED_APPS: Lists all Django apps and third-party packages
  - MIDDLEWARE: Includes CORS middleware for frontend communication
  - DATABASES: SQLite configuration
  - REST_FRAMEWORK: Pagination and filter settings
  - CORS_ALLOWED_ORIGINS: Frontend URL whitelist
```

#### 4. **backend/phonebook_project/urls.py**
```
Purpose: Main URL routing
Routes:
  - /admin/          → Django admin panel
  - /api/            → Phonebook app API endpoints
```

#### 5. **backend/phonebook_app/models.py**
```
Purpose: Database models (3 models)

Model 1: Group
  Fields:
    - id (AutoField)
    - name (CharField, max_length=100)
    - description (TextField, blank=True)
    - created_at (DateTimeField, auto_now_add=True)
  Relations:
    - One-to-Many with Contact (reverse: contacts)

Model 2: Contact
  Fields:
    - id (AutoField)
    - first_name (CharField, max_length=100)
    - last_name (CharField, max_length=100)
    - phone_number (CharField, max_length=15)
    - email (EmailField, blank=True)
    - address (TextField, blank=True)
    - group (ForeignKey to Group, null=True)
    - created_at (DateTimeField, auto_now_add=True)
    - updated_at (DateTimeField, auto_now=True)
  Relations:
    - Many-to-One with Group
    - One-to-Many with ContactNote (reverse: notes)

Model 3: ContactNote
  Fields:
    - id (AutoField)
    - contact (ForeignKey to Contact)
    - note (TextField)
    - created_at (DateTimeField, auto_now_add=True)
  Relations:
    - Many-to-One with Contact
```

#### 6. **backend/phonebook_app/serializers.py**
```
Purpose: DRF serializers for API data transformation

Serializer 1: GroupSerializer
  Fields: id, name, description, created_at, contacts_count
  Methods:
    - get_contacts_count(): Returns count of contacts in group

Serializer 2: ContactSerializer
  Fields: id, first_name, last_name, phone_number, email, 
          address, group, group_name, notes, created_at, updated_at
  Nested:
    - notes: ContactNoteSerializer(many=True, read_only=True)
    - group_name: CharField(source='group.name', read_only=True)

Serializer 3: ContactNoteSerializer
  Fields: id, contact, note, created_at
```

#### 7. **backend/phonebook_app/views.py**
```
Purpose: API ViewSets for handling requests

ViewSet 1: GroupViewSet
  Base: ModelViewSet (provides list, create, retrieve, update, destroy)
  Queryset: Group.objects.all()
  Features:
    - Search by name

ViewSet 2: ContactViewSet
  Base: ModelViewSet
  Queryset: Contact.objects.all()
  Features:
    - Search by first_name, last_name, phone_number, email
    - Filter by group
    - Order by first_name, last_name, created_at
  Custom Actions:
    - @action GET /contacts/{id}/notes/ - Get all notes for a contact

ViewSet 3: ContactNoteViewSet
  Base: ModelViewSet
  Queryset: ContactNote.objects.all()
  Features:
    - Filter by contact
```

#### 8. **backend/phonebook_app/urls.py**
```
Purpose: App-level URL routing with DRF router

Router Configuration:
  - /api/groups/          → GroupViewSet
  - /api/contacts/        → ContactViewSet
  - /api/notes/           → ContactNoteViewSet

Generated URLs:
  Groups:
    - GET    /api/groups/           # List groups
    - POST   /api/groups/           # Create group
    - GET    /api/groups/{id}/      # Get group
    - PUT    /api/groups/{id}/      # Update group
    - PATCH  /api/groups/{id}/      # Partial update
    - DELETE /api/groups/{id}/      # Delete group
  
  Contacts:
    - GET    /api/contacts/         # List contacts
    - POST   /api/contacts/         # Create contact
    - GET    /api/contacts/{id}/    # Get contact
    - PUT    /api/contacts/{id}/    # Update contact
    - PATCH  /api/contacts/{id}/    # Partial update
    - DELETE /api/contacts/{id}/    # Delete contact
    - GET    /api/contacts/{id}/notes/  # Custom action
  
  Notes:
    - GET    /api/notes/            # List notes
    - POST   /api/notes/            # Create note
    - GET    /api/notes/{id}/       # Get note
    - DELETE /api/notes/{id}/       # Delete note
```

#### 9. **backend/phonebook_app/admin.py**
```
Purpose: Django admin panel configuration

Admin Classes:
  - GroupAdmin: Display name, created_at | Search by name
  - ContactAdmin: Display full details | Filter by group, date | Search all fields
  - ContactNoteAdmin: Display contact, note, date | Filter by date
```

---

### ⚛️ Frontend Files

#### 1. **frontend/package.json**
```
Purpose: NPM package configuration
Dependencies:
  - react: ^18.2.0
  - react-dom: ^18.2.0
  - react-router-dom: ^6.20.0
  - axios: ^1.6.0
  - react-scripts: 5.0.1
Scripts:
  - npm start   → Start development server
  - npm build   → Build production bundle
  - npm test    → Run tests
  - npm eject   → Eject from create-react-app
Proxy:
  - http://localhost:8000  (for API calls)
```

#### 2. **frontend/public/index.html**
```
Purpose: HTML template for React app
Contains:
  - Root div (#root) where React mounts
  - Meta tags for SEO and mobile
  - Title: "Masai PhoneBook"
```

#### 3. **frontend/src/index.js**
```
Purpose: React application entry point
Functionality:
  - Imports React and ReactDOM
  - Creates root element
  - Renders <App /> component in StrictMode
  - Imports index.css for global styles
```

#### 4. **frontend/src/App.js**
```
Purpose: Main application component with routing
Structure:
  - Navigation bar with links
  - React Router configuration
Routes:
  - / → ContactList component
  - /contact/:id → ContactDetail component
  - /groups → GroupList component
Components Used:
  - BrowserRouter, Routes, Route, Link from react-router-dom
  - ContactList, ContactDetail, GroupList
```

#### 5. **frontend/src/services/api.js**
```
Purpose: Axios API client for backend communication
Base URL: http://localhost:8000/api
Headers: Content-Type: application/json

Exported Functions:

Groups:
  - getGroups()                    # GET /api/groups/
  - getGroup(id)                   # GET /api/groups/{id}/
  - createGroup(data)              # POST /api/groups/
  - updateGroup(id, data)          # PUT /api/groups/{id}/
  - deleteGroup(id)                # DELETE /api/groups/{id}/

Contacts:
  - getContacts(params)            # GET /api/contacts/ with query params
  - getContact(id)                 # GET /api/contacts/{id}/
  - createContact(data)            # POST /api/contacts/
  - updateContact(id, data)        # PUT /api/contacts/{id}/
  - deleteContact(id)              # DELETE /api/contacts/{id}/

Notes:
  - getNotes(contactId)            # GET /api/notes/?contact={contactId}
  - createNote(data)               # POST /api/notes/
  - deleteNote(id)                 # DELETE /api/notes/{id}/
```

#### 6. **frontend/src/components/ContactList.js**
```
Purpose: Display and manage all contacts
State Management:
  - contacts: Array of contact objects
  - groups: Array of group objects
  - searchTerm: String for search input
  - selectedGroup: Number for group filter
  - editingContact: Object or null
  - showForm: Boolean for modal visibility

Hooks:
  - useState: Manage component state
  - useEffect: Fetch data on mount and when filters change

Functions:
  - fetchContacts(): GET contacts with search/filter params
  - fetchGroups(): GET all groups
  - handleDelete(id): DELETE contact with confirmation
  - handleEdit(contact): Open form with contact data
  - handleFormClose(): Close form and refresh data

UI Elements:
  - Header with "Add New Contact" button
  - Search input (real-time search)
  - Group filter dropdown
  - ContactForm modal (conditional)
  - Contact cards grid with Edit/Delete actions
```

#### 7. **frontend/src/components/ContactForm.js**
```
Purpose: Create/Edit contact modal form
Props:
  - contact: Contact object for editing (null for create)
  - groups: Array of available groups
  - onClose: Callback function to close form

State:
  - formData: Object with contact fields

Hooks:
  - useState: Form data management
  - useEffect: Pre-fill form when editing

Form Fields:
  - first_name (required)
  - last_name (required)
  - phone_number (required)
  - email (optional)
  - address (optional)
  - group (dropdown, optional)

Functions:
  - handleChange(e): Update form state
  - handleSubmit(e): POST or PUT based on edit mode

Validation:
  - Required fields enforced with HTML5 validation
```

#### 8. **frontend/src/components/ContactDetail.js**
```
Purpose: Display single contact with notes management
URL Parameter: id (from useParams hook)

State:
  - contact: Contact object
  - notes: Array of note objects
  - newNote: String for note input

Hooks:
  - useParams: Get contact ID from URL
  - useNavigate: Navigate back to list
  - useState: State management
  - useEffect: Fetch data on mount

Functions:
  - fetchContact(): GET contact details
  - fetchNotes(): GET notes for contact
  - handleAddNote(e): POST new note
  - handleDeleteNote(noteId): DELETE note

UI Sections:
  1. Back button (navigation)
  2. Contact information display
  3. Notes section with:
     - Add note form (textarea + button)
     - Notes list with delete buttons
```

#### 9. **frontend/src/components/GroupList.js**
```
Purpose: Display and manage all groups
State:
  - groups: Array of group objects
  - editingGroup: Object or null
  - showForm: Boolean

Functions:
  - fetchGroups(): GET all groups
  - handleDelete(id): DELETE group with confirmation
  - handleEdit(group): Open form for editing
  - handleFormClose(): Close form and refresh

UI:
  - Header with "Add New Group" button
  - GroupForm modal (conditional)
  - Groups grid showing:
    - Name
    - Description
    - Contact count
    - Edit/Delete buttons
```

#### 10. **frontend/src/components/GroupForm.js**
```
Purpose: Create/Edit group modal form
Props:
  - group: Group object for editing
  - onClose: Callback function

State:
  - formData: {name, description}

Form Fields:
  - name (required)
  - description (optional)

Functions:
  - handleChange(e): Update form state
  - handleSubmit(e): POST or PUT group

Buttons:
  - Save: Submit form
  - Cancel: Close modal without saving
```

#### 11. **frontend/src/App.css**
```
Purpose: Complete application styling
Sections:
  1. Global Resets (*, body)
  2. Navigation Bar (.navbar, .nav-links)
  3. Container & Layout (.container, .header)
  4. Buttons (button, .actions button)
  5. Forms & Inputs (input, textarea, select)
  6. Filters (.filters)
  7. Grid Layouts (.contacts-grid, .groups-grid)
  8. Cards (.contact-card, .group-card)
  9. Modal (.modal, .modal-content)
  10. Contact Detail (.contact-info, .notes-section)
  11. Notes (.note-card)

Responsive:
  - Grid adapts with minmax(300px, 1fr)
  - Mobile-friendly spacing
```

#### 12. **frontend/src/index.css**
```
Purpose: Global base styles
Contents:
  - Body font family
  - Code font family
  - Font smoothing
  - Basic resets
```

---

## 🚀 DETAILED SETUP INSTRUCTIONS

### Prerequisites
```
✅ Python 3.8+ installed
✅ Node.js 14+ and npm installed
✅ Git installed (optional)
✅ Code editor (VS Code recommended)
```

### Step 1: Backend Setup (Django)

1. **Navigate to backend directory**
```bash
cd masai_phonebook/backend
```

2. **Create virtual environment**
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

3. **Install Python dependencies**
```bash
pip install -r requirements.txt
```

4. **Create database tables**
```bash
python manage.py makemigrations
python manage.py migrate
```

5. **Create superuser (optional but recommended)**
```bash
python manage.py createsuperuser
# Enter username: admin
# Enter email: admin@example.com
# Enter password: admin123
```

6. **Start Django development server**
```bash
python manage.py runserver
```

**✅ Backend Running:**
- API: http://localhost:8000/api/
- Admin: http://localhost:8000/admin/
- Groups: http://localhost:8000/api/groups/
- Contacts: http://localhost:8000/api/contacts/
- Notes: http://localhost:8000/api/notes/

### Step 2: Frontend Setup (React)

1. **Open NEW terminal (keep backend running)**

2. **Navigate to frontend directory**
```bash
cd masai_phonebook/frontend
```

3. **Install Node dependencies**
```bash
npm install
```

4. **Start React development server**
```bash
npm start
```

**✅ Frontend Running:**
- App: http://localhost:3000/
- Contacts: http://localhost:3000/
- Groups: http://localhost:3000/groups

### Step 3: Verify Setup

1. **Backend Check:**
   - Visit http://localhost:8000/api/
   - Should see Django REST Framework browsable API

2. **Frontend Check:**
   - Visit http://localhost:3000/
   - Should see Masai PhoneBook interface

3. **Connection Check:**
   - Open browser console (F12)
   - No CORS errors should appear
   - Try creating a group to test API connection

---

## 🔌 API DOCUMENTATION

### Base URL
```
http://localhost:8000/api/
```

### Authentication
```
No authentication required (development mode)
```

### Response Format
```json
{
  "count": 10,
  "next": "http://localhost:8000/api/contacts/?page=2",
  "previous": null,
  "results": [ /* array of objects */ ]
}
```

### Groups Endpoints

**1. List All Groups**
```
GET /api/groups/

Response 200:
{
  "count": 3,
  "results": [
    {
      "id": 1,
      "name": "Family",
      "description": "Family members",
      "created_at": "2026-02-15T10:00:00Z",
      "contacts_count": 5
    }
  ]
}
```

**2. Create Group**
```
POST /api/groups/
Content-Type: application/json

Body:
{
  "name": "Work",
  "description": "Work colleagues"
}

Response 201:
{
  "id": 2,
  "name": "Work",
  "description": "Work colleagues",
  "created_at": "2026-02-15T10:05:00Z",
  "contacts_count": 0
}
```

**3. Get Single Group**
```
GET /api/groups/1/

Response 200:
{
  "id": 1,
  "name": "Family",
  "description": "Family members",
  "created_at": "2026-02-15T10:00:00Z",
  "contacts_count": 5
}
```

**4. Update Group**
```
PUT /api/groups/1/
Content-Type: application/json

Body:
{
  "name": "Family & Friends",
  "description": "Close relationships"
}

Response 200:
{
  "id": 1,
  "name": "Family & Friends",
  "description": "Close relationships",
  "created_at": "2026-02-15T10:00:00Z",
  "contacts_count": 5
}
```

**5. Delete Group**
```
DELETE /api/groups/1/

Response 204: No Content
```

### Contacts Endpoints

**1. List All Contacts (with filters)**
```
GET /api/contacts/
GET /api/contacts/?search=john
GET /api/contacts/?group=1
GET /api/contacts/?search=john&group=1&ordering=first_name

Response 200:
{
  "count": 15,
  "results": [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "phone_number": "+254712345678",
      "email": "john@example.com",
      "address": "123 Main St, Nairobi",
      "group": 1,
      "group_name": "Family",
      "notes": [
        {
          "id": 1,
          "contact": 1,
          "note": "Birthday in March",
          "created_at": "2026-02-15T10:10:00Z"
        }
      ],
      "created_at": "2026-02-15T09:00:00Z",
      "updated_at": "2026-02-15T09:30:00Z"
    }
  ]
}

Query Parameters:
  - search: Search in first_name, last_name, phone_number, email
  - group: Filter by group ID
  - ordering: Sort by field (prefix with - for descending)
```

**2. Create Contact**
```
POST /api/contacts/
Content-Type: application/json

Body:
{
  "first_name": "Jane",
  "last_name": "Smith",
  "phone_number": "+254722334455",
  "email": "jane@example.com",
  "address": "456 Oak Ave, Mombasa",
  "group": 1
}

Response 201:
{
  "id": 2,
  "first_name": "Jane",
  "last_name": "Smith",
  "phone_number": "+254722334455",
  "email": "jane@example.com",
  "address": "456 Oak Ave, Mombasa",
  "group": 1,
  "group_name": "Family",
  "notes": [],
  "created_at": "2026-02-15T11:00:00Z",
  "updated_at": "2026-02-15T11:00:00Z"
}
```

**3. Get Single Contact**
```
GET /api/contacts/1/

Response 200:
{
  "id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "phone_number": "+254712345678",
  "email": "john@example.com",
  "address": "123 Main St, Nairobi",
  "group": 1,
  "group_name": "Family",
  "notes": [ /* array of notes */ ],
  "created_at": "2026-02-15T09:00:00Z",
  "updated_at": "2026-02-15T09:30:00Z"
}
```

**4. Update Contact**
```
PUT /api/contacts/1/
Content-Type: application/json

Body:
{
  "first_name": "John",
  "last_name": "Doe",
  "phone_number": "+254712345678",
  "email": "john.doe@example.com",
  "address": "123 Main St, Nairobi",
  "group": 2
}

Response 200:
{
  "id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "phone_number": "+254712345678",
  "email": "john.doe@example.com",
  "address": "123 Main St, Nairobi",
  "group": 2,
  "group_name": "Work",
  "notes": [ /* array of notes */ ],
  "created_at": "2026-02-15T09:00:00Z",
  "updated_at": "2026-02-15T11:30:00Z"
}
```

**5. Delete Contact**
```
DELETE /api/contacts/1/

Response 204: No Content
```

**6. Get Contact Notes (Custom Action)**
```
GET /api/contacts/1/notes/

Response 200:
[
  {
    "id": 1,
    "contact": 1,
    "note": "Birthday in March",
    "created_at": "2026-02-15T10:10:00Z"
  },
  {
    "id": 2,
    "contact": 1,
    "note": "Prefers email communication",
    "created_at": "2026-02-15T10:15:00Z"
  }
]
```

### Notes Endpoints

**1. List Notes (filtered by contact)**
```
GET /api/notes/
GET /api/notes/?contact=1

Response 200:
{
  "count": 2,
  "results": [
    {
      "id": 1,
      "contact": 1,
      "note": "Remember to call about project",
      "created_at": "2026-02-15T10:20:00Z"
    }
  ]
}
```

**2. Create Note**
```
POST /api/notes/
Content-Type: application/json

Body:
{
  "contact": 1,
  "note": "Discussed new business opportunity"
}

Response 201:
{
  "id": 3,
  "contact": 1,
  "note": "Discussed new business opportunity",
  "created_at": "2026-02-15T12:00:00Z"
}
```

**3. Delete Note**
```
DELETE /api/notes/1/

Response 204: No Content
```

### Error Responses

**400 Bad Request**
```json
{
  "field_name": [
    "This field is required."
  ]
}
```

**404 Not Found**
```json
{
  "detail": "Not found."
}
```

**500 Internal Server Error**
```json
{
  "detail": "Internal server error."
}
```

---

## 🏗️ COMPONENT ARCHITECTURE

### Data Flow Diagram
```
User Action
    ↓
React Component (UI)
    ↓
Event Handler Function
    ↓
services/api.js (Axios)
    ↓
HTTP Request → Django Backend
    ↓
ViewSet (views.py)
    ↓
Serializer (serializers.py)
    ↓
Model (models.py)
    ↓
Database (SQLite)
    ↓
← Response Flow (reverse)
    ↓
React State Update
    ↓
UI Re-render
```

### Component Hierarchy
```
App (React Router)
├── ContactList
│   └── ContactForm (Modal)
├── ContactDetail
│   └── Note Form (Inline)
└── GroupList
    └── GroupForm (Modal)
```

### State Management Strategy
```
Each component manages its own state using useState:
- ContactList: contacts[], groups[], filters
- GroupList: groups[]
- ContactDetail: contact{}, notes[], newNote
- Forms: formData{}

No global state management (Redux/Context) needed for this project size
```

---

## 💾 DATABASE SCHEMA

### Entity Relationship Diagram
```
┌─────────────────┐
│     Group       │
├─────────────────┤
│ id (PK)         │
│ name            │
│ description     │
│ created_at      │
└─────────────────┘
        │
        │ 1:N
        │
        ▼
┌─────────────────┐
│    Contact      │
├─────────────────┤
│ id (PK)         │
│ first_name      │
│ last_name       │
│ phone_number    │
│ email           │
│ address         │
│ group_id (FK)   │
│ created_at      │
│ updated_at      │
└─────────────────┘
        │
        │ 1:N
        │
        ▼
┌─────────────────┐
│  ContactNote    │
├─────────────────┤
│ id (PK)         │
│ contact_id (FK) │
│ note            │
│ created_at      │
└─────────────────┘
```

### Table Specifications

**1. phonebook_app_group**
```sql
CREATE TABLE phonebook_app_group (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at DATETIME NOT NULL
);
```

**2. phonebook_app_contact**
```sql
CREATE TABLE phonebook_app_contact (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    email VARCHAR(254),
    address TEXT,
    group_id INTEGER,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    FOREIGN KEY (group_id) REFERENCES phonebook_app_group(id)
);
```

**3. phonebook_app_contactnote**
```sql
CREATE TABLE phonebook_app_contactnote (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_id INTEGER NOT NULL,
    note TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (contact_id) REFERENCES phonebook_app_contact(id) ON DELETE CASCADE
);
```

### Indexes
```sql
-- Automatic indexes on primary keys
-- Foreign key indexes for better join performance
CREATE INDEX idx_contact_group ON phonebook_app_contact(group_id);
CREATE INDEX idx_note_contact ON phonebook_app_contactnote(contact_id);

-- Search optimization
CREATE INDEX idx_contact_name ON phonebook_app_contact(first_name, last_name);
CREATE INDEX idx_contact_phone ON phonebook_app_contact(phone_number);
```

---

## 🧪 TESTING GUIDE

### Backend API Testing (Using Django REST Framework Browsable API)

1. **Access Browsable API**
   - Navigate to http://localhost:8000/api/
   - You'll see a web interface for testing

2. **Test Groups**
   ```
   1. Go to http://localhost:8000/api/groups/
   2. Click "POST" button
   3. Fill in JSON:
      {
        "name": "Test Group",
        "description": "Testing"
      }
   4. Click "POST" to create
   5. Verify response shows new group with ID
   ```

3. **Test Contacts**
   ```
   1. Go to http://localhost:8000/api/contacts/
   2. Create contact with test data
   3. Test search: /api/contacts/?search=test
   4. Test filter: /api/contacts/?group=1
   ```

4. **Test Notes**
   ```
   1. Create a contact first
   2. Go to /api/notes/
   3. Create note with contact ID
   4. Filter notes: /api/notes/?contact=1
   ```

### Frontend Testing (Manual)

**Test 1: Group Management**
```
1. Click "Groups" in navigation
2. Click "Add New Group"
3. Fill form and submit
4. Verify group appears in list
5. Click "Edit" on group
6. Modify and save
7. Click "Delete" and confirm
```

**Test 2: Contact Management**
```
1. Go to home page (Contacts)
2. Click "Add New Contact"
3. Fill all fields and select group
4. Submit form
5. Verify contact appears in grid
6. Type in search box - should filter
7. Select group filter - should filter
8. Click "Edit" - form should pre-fill
9. Click "Delete" - should confirm and remove
```

**Test 3: Notes Functionality**
```
1. Click on a contact card
2. Should navigate to detail page
3. Type note in textarea
4. Click "Add Note"
5. Verify note appears in list
6. Click "Delete" on note
7. Verify note removed
8. Click "← Back" button
9. Should return to contact list
```

**Test 4: Search and Filter**
```
1. Create multiple contacts in different groups
2. Test search by:
   - First name
   - Last name
   - Phone number
   - Email
3. Test filter by group
4. Test combination of search + filter
```

### API Testing with cURL

**Create Group**
```bash
curl -X POST http://localhost:8000/api/groups/ \
  -H "Content-Type: application/json" \
  -d '{"name":"Friends","description":"Close friends"}'
```

**Create Contact**
```bash
curl -X POST http://localhost:8000/api/contacts/ \
  -H "Content-Type: application/json" \
  -d '{
    "first_name":"Steve",
    "last_name":"Ongera",
    "phone_number":"+254112284093",
    "email":"steveongera001@gmail.com",
    "group":1
  }'
```

**Search Contacts**
```bash
curl "http://localhost:8000/api/contacts/?search=steve"
```

**Create Note**
```bash
curl -X POST http://localhost:8000/api/notes/ \
  -H "Content-Type: application/json" \
  -d '{"contact":1,"note":"Software Lead Developer"}'
```

---

## 🐛 TROUBLESHOOTING

### Common Backend Issues

**Issue 1: Module not found errors**
```
Solution:
1. Ensure virtual environment is activated
2. Run: pip install -r requirements.txt
3. Restart terminal if needed
```

**Issue 2: Migration errors**
```
Solution:
1. Delete db.sqlite3
2. Delete migrations folder (except __init__.py)
3. Run: python manage.py makemigrations
4. Run: python manage.py migrate
```

**Issue 3: Port 8000 already in use**
```
Solution:
Run on different port: python manage.py runserver 8001
Update frontend api.js BASE_URL to http://localhost:8001/api
```

### Common Frontend Issues

**Issue 1: npm install fails**
```
Solution:
1. Delete node_modules folder
2. Delete package-lock.json
3. Run: npm cache clean --force
4. Run: npm install
```

**Issue 2: CORS errors in browser**
```
Solution:
1. Check backend CORS settings in settings.py
2. Verify CORS_ALLOWED_ORIGINS includes http://localhost:3000
3. Restart Django server
```

**Issue 3: API calls not working**
```
Solution:
1. Check backend is running (http://localhost:8000/api/)
2. Check frontend proxy in package.json
3. Check browser console for errors
4. Verify BASE_URL in api.js
```

**Issue 4: React app won't start**
```
Solution:
1. Check port 3000 is available
2. Run: npm start -- --port 3001 (use different port)
3. Check for syntax errors in code
```

---

## 📈 FUTURE ENHANCEMENTS

### Potential Features to Add

1. **Authentication & Authorization**
   - User registration and login
   - JWT token authentication
   - Per-user contact lists
   - Permission levels

2. **Advanced Search**
   - Fuzzy search
   - Search in notes
   - Advanced filters (date ranges, custom fields)

3. **Contact Import/Export**
   - CSV import
   - vCard (.vcf) export
   - Excel export
   - Bulk operations

4. **UI Enhancements**
   - Dark mode toggle
   - Drag & drop contact organization
   - Contact avatars/photos
   - Activity timeline

5. **Communication Features**
   - Click-to-call integration
   - Email composition
   - SMS integration
   - Contact birthday reminders

6. **Data Management**
   - Contact merge/duplicate detection
   - Backup and restore
   - Contact sharing
   - Tags/labels system

7. **Analytics**
   - Contact statistics
   - Most contacted people
   - Group distribution charts
   - Activity heatmaps

8. **Mobile App**
   - React Native version
   - Offline mode
   - Push notifications
   - Contact sync

---

## 📚 LEARNING RESOURCES

### Django Resources
- Official Django Docs: https://docs.djangoproject.com/
- Django REST Framework: https://www.django-rest-framework.org/
- Django Girls Tutorial: https://tutorial.djangogirls.org/

### React Resources
- Official React Docs: https://react.dev/
- React Router: https://reactrouter.com/
- Axios Documentation: https://axios-http.com/

### API Design
- REST API Best Practices
- HTTP Methods and Status Codes
- RESTful API Design Patterns

---

## 📞 SUPPORT & CONTACT

**Developer:** Steve Ongera  
**Email:** steveongera001@gmail.com  
**Phone:** +254 112 284 093  
**Role:** Software Lead Developer  

**Project Repository:** (Add GitHub link if applicable)  
**Documentation:** This file  
**Last Updated:** February 15, 2026  

---

## 📄 LICENSE

This is a practice project for learning purposes.  
Feel free to use, modify, and learn from this codebase.

---

## 🎓 ACKNOWLEDGMENTS

- **Masai School** - For the learning opportunity
- **Django Community** - For excellent framework and documentation
- **React Team** - For powerful UI library
- **Open Source Community** - For amazing tools and libraries

---

**Built with ❤️ by Steve Ongera**  
**Masai PhoneBook Application - February 2026**

---

## 📊 PROJECT STATISTICS

- **Total Files:** 25+
- **Lines of Code:** ~2000+
- **Backend Models:** 3
- **API Endpoints:** 15+
- **React Components:** 6
- **Development Time:** Practice Project
- **Technologies Used:** 8+

---

END OF DOCUMENTATION