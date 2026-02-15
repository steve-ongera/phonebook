import React, { useState, useEffect } from 'react';
import { getGroups, deleteGroup } from '../services/api';
import GroupForm from './GroupForm';

function GroupList() {
  const [groups, setGroups] = useState([]);
  const [editingGroup, setEditingGroup] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await getGroups();
      setGroups(response.data.results || response.data);
    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this group?')) {
      try {
        await deleteGroup(id);
        fetchGroups();
      } catch (error) {
        console.error('Error deleting group:', error);
      }
    }
  };

  const handleEdit = (group) => {
    setEditingGroup(group);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingGroup(null);
    fetchGroups();
  };

  return (
    <div className="group-list">
      <div className="header">
        <h2>Groups</h2>
        <button onClick={() => setShowForm(true)}>Add New Group</button>
      </div>

      {showForm && (
        <GroupForm group={editingGroup} onClose={handleFormClose} />
      )}

      <div className="groups-grid">
        {groups.map(group => (
          <div key={group.id} className="group-card">
            <h3>{group.name}</h3>
            <p>{group.description}</p>
            <p>Contacts: {group.contacts_count}</p>
            <div className="actions">
              <button onClick={() => handleEdit(group)}>Edit</button>
              <button onClick={() => handleDelete(group.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupList;