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
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    fetchContacts();
    fetchGroups();
  }, [searchTerm, selectedGroup, currentPage]);

  const fetchContacts = async () => {
    try {
      const params = { page: currentPage };
      if (searchTerm) params.search = searchTerm;
      if (selectedGroup) params.group = selectedGroup;
      
      const response = await getContacts(params);
      
      // Handle paginated response
      if (response.data.results) {
        setContacts(response.data.results);
        setTotalCount(response.data.count);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
        
        // Calculate total pages (assuming 10 items per page)
        setTotalPages(Math.ceil(response.data.count / 10));
      } else {
        // Handle non-paginated response (if pagination is disabled)
        setContacts(response.data);
        setTotalCount(response.data.length);
        setTotalPages(1);
      }
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top when changing pages
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Reset to page 1 when search or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedGroup]);

  return (
    <div className="contact-list">
      <div className="header">
        <h2>Contacts ({totalCount})</h2>
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
        {contacts.length > 0 ? (
          contacts.map(contact => (
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
          ))
        ) : (
          <div className="no-contacts">
            <p>No contacts found. Add your first contact!</p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={handlePrevious} 
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            ← Previous
          </button>
          
          <div className="pagination-info">
            <span>Page {currentPage} of {totalPages}</span>
            <span className="pagination-count">
              Showing {contacts.length} of {totalCount} contacts
            </span>
          </div>

          <button 
            onClick={handleNext} 
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Next →
          </button>
        </div>
      )}

      {/* Page Numbers */}
      {totalPages > 1 && totalPages <= 10 && (
        <div className="pagination-numbers">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactList;