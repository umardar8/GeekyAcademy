// src/components/HeroSection.js
import React from 'react';
import '../../styles/HeroSection.css'; // Create this CSS file
import heroImage from '../assets/carousel-img1.jpg'; // Path to your hero image

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>1-ON-1 <br />CAREER ADVICE SERVICE</h1>
        <p>Get personalized guidance for your career path.</p>
        <button className="hero-button">Explore Services</button> {/* Or "Book Now" */}
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Career Advice Service" />
      </div>
    </section>
  );
}

export default HeroSection;