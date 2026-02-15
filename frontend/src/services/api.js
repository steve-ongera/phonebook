import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Group APIs
export const getGroups = () => api.get('/groups/');
export const getGroup = (id) => api.get(`/groups/${id}/`);
export const createGroup = (data) => api.post('/groups/', data);
export const updateGroup = (id, data) => api.put(`/groups/${id}/`, data);
export const deleteGroup = (id) => api.delete(`/groups/${id}/`);

// Contact APIs
export const getContacts = (params = {}) => api.get('/contacts/', { params });
export const getContact = (id) => api.get(`/contacts/${id}/`);
export const createContact = (data) => api.post('/contacts/', data);
export const updateContact = (id, data) => api.put(`/contacts/${id}/`, data);
export const deleteContact = (id) => api.delete(`/contacts/${id}/`);

// Note APIs
export const getNotes = (contactId) => api.get(`/notes/`, { params: { contact: contactId } });
export const createNote = (data) => api.post('/notes/', data);
export const deleteNote = (id) => api.delete(`/notes/${id}/`);

export default api;