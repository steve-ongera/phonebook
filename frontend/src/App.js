import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import GroupList from './components/GroupList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1>📱 Masai PhoneBook</h1>
          <div className="nav-links">
            <Link to="/">Contacts</Link>
            <Link to="/groups">Groups</Link>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/contact/:id" element={<ContactDetail />} />
            <Route path="/groups" element={<GroupList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;