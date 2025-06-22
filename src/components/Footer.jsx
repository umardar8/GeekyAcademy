// src/components/Footer.js
import React from 'react';
import '../../styles/Footer.css'; // Create this CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Geeky Academy</h3>
          <p>
            {/* Add a short description about MUFT */}
            Providing digital skills development trainings and quality education.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li> {/* Add more links */}
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <p><i className="fas fa-map-marker-alt"></i> Head Office: Geeky Academy Institue, Ahmednagar Chatha, Gujranwala, Punjab, Pakistan (52070)</p>
          <p><i className="fas fa-phone"></i> +92 342-3181625</p> {/* Use actual number */}
          <p><i className="fas fa-envelope"></i> contactus@geekyacademy.com</p> {/* Use actual email */}
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