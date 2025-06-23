// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import '../../styles/Header.css'; // Create this CSS file

function Header() {
  return (
    <header className="header container-fluid justify-content-evenly align-content-center">
      <div className="logo col-2">
        <Link to="/">GEEKY ACADEMY</Link>
      </div>
      {/* Search Bar */}
        <div className="search-bar row col-3 rounded">
          <div className='col-10'>
            <input
              type="text"
              placeholder="Search Courses"
              className="search-input border-0 col-12 py-1"
            />
          </div>
          <button className='search-icon col-2 pb-1 ps-4 m-0'>
            <FaSearch />
          </button>          
        </div>
      <nav className="navbar col-5">
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