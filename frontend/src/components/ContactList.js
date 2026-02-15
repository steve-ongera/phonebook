import React, { useState, useEffect } from 'react';
import { getContacts, deleteContact, getGroups } from '../services/api';
import ContactForm from './ContactForm';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [editingContact, setEditingContact] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchContacts();
    fetchGroups();
  }, [searchTerm, selectedGroup]);

  const fetchContacts = async () => {
    try {
      const params = {};
      if (searchTerm) params.search = searchTerm;
      if (selectedGroup) params.group = selectedGroup;
      const response = await getContacts(params);
      setContacts(response.data.results || response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const fetchGroups = async () => {
    try {
      const response = await getGroups();
      setGroups(response.data.results || response.data);
    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await deleteContact(id);
        fetchContacts();
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingContact(null);
    fetchContacts();
  };

  return (
    <div className="contact-list">
      <div className="header">
        <h2>Contacts</h2>
        <button onClick={() => setShowForm(true)}>Add New Contact</button>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)}>
          <option value="">All Groups</option>
          {groups.map(group => (
            <option key={group.id} value={group.id}>{group.name}</option>
          ))}
        </select>
      </div>

      {showForm && (
        <ContactForm
          contact={editingContact}
          groups={groups}
          onClose={handleFormClose}
        />
      )}

      <div className="contacts-grid">
        {contacts.map(contact => (
          <div key={contact.id} className="contact-card">
            <h3>{contact.first_name} {contact.last_name}</h3>
            <p>📞 {contact.phone_number}</p>
            <p>📧 {contact.email}</p>
            <p>🏷️ {contact.group_name || 'No Group'}</p>
            <div className="actions">
              <button onClick={() => handleEdit(contact)}>Edit</button>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;