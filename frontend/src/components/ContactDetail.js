import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getContact, getNotes, createNote, deleteNote } from '../services/api';

function ContactDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    fetchContact();
    fetchNotes();
  }, [id]);

  const fetchContact = async () => {
    try {
      const response = await getContact(id);
      setContact(response.data);
    } catch (error) {
      console.error('Error fetching contact:', error);
    }
  };

  const fetchNotes = async () => {
    try {
      const response = await getNotes(id);
      setNotes(response.data.results || response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    
    try {
      await createNote({ contact: id, note: newNote });
      setNewNote('');
      fetchNotes();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await deleteNote(noteId);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="contact-detail">
      <button onClick={() => navigate(-1)}>← Back</button>
      
      <div className="contact-info">
        <h1>{contact.first_name} {contact.last_name}</h1>
        <p>📞 {contact.phone_number}</p>
        <p>📧 {contact.email}</p>
        <p>🏷️ {contact.group_name || 'No Group'}</p>
        <p>📍 {contact.address}</p>
      </div>

      <div className="notes-section">
        <h2>Notes</h2>
        <form onSubmit={handleAddNote}>
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Add a note..."
          />
          <button type="submit">Add Note</button>
        </form>

        <div className="notes-list">
          {notes.map(note => (
            <div key={note.id} className="note-card">
              <p>{note.note}</p>
              <small>{new Date(note.created_at).toLocaleString()}</small>
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;