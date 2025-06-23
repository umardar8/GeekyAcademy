// src/components/Footer.js
import React from 'react';
import '../../styles/Footer.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Geeky Academy</h3>
          <p>
            Geeky Academy is a leading online learning platform dedicated to empowering individuals with the skills they need to succeed in the digital age.
            We offer a wide range of courses designed to help you advance your career, enhance your knowledge, and achieve your personal and professional goals.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Success Stories</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <p><FaMapMarkerAlt /> Head Office: Geeky Academy Institue, Ahmednagar Chatha, Gujranwala, Punjab, Pakistan (52070)</p>
          <p><FaPhone /> +92 342-3181625</p>
          <p><FaEnvelope /> contactus@geekyacademy.com</p>
        </div>
        {/* Add social media icons here if needed */}
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MUFT. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;