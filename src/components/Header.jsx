// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/Header.css'; // Create this CSS file

function Header() {
  return (
    <Navbar expand="lg" className="header bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className='logo'>Geeky Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar me-auto col-12">
      {/* Search Bar */}
        <div className="search-bar d-flex align-items-center me-3">
          <input
            type="text"
            placeholder="Search Courses"
            className="search-input border-0 px-2 py-1"
          />
          <button className="search-icon btn">
            <FaSearch />
          </button>
        </div>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
        <Nav.Link as={Link} to="/success-stories">Success Stories</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        <Nav.Link as={Link} to="/join" className='join-button'>Join</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;