// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css'; // Create this CSS file

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Geeky Academy</Link>
      </div>
      {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-96 bg-white text-black rounded-full py-2 px-4 outline-black ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/success-stories">Success Stories</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/join" className="join-button">Join</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;