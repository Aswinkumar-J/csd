// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f5f5f5' }}>
      <h1>MediTrack</h1>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/view">View Tracks</Link></li>
          <li><Link to="/add">Add Track</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
