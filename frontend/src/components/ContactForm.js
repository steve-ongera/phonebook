import React, { useState, useEffect } from 'react';
import { createContact, updateContact } from '../services/api';

function ContactForm({ contact, groups, onClose }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    address: '',
    group: ''
  });

  useEffect(() => {
    if (contact) {
      setFormData({
        first_name: contact.first_name,
        last_name: contact.last_name,
        phone_number: contact.phone_number,
        email: contact.email || '',
        address: contact.address || '',
        group: contact.group || ''
      });
    }
  }, [contact]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (contact) {
        await updateContact(contact.id, formData);
      } else {
        await createContact(formData);
      }
      onClose();
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{contact ? 'Edit Contact' : 'Add New Contact'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          <select name="group" value={formData.group} onChange={handleChange}>
            <option value="">Select Group</option>
            {groups.map(group => (
              <option key={group.id} value={group.id}>{group.name}</option>
            ))}
          </select>
          <div className="form-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;