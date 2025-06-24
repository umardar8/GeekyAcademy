// src/pages/AboutPage.js
import React from 'react';
 // Create this CSS file

function AboutPage() {
  return (
    <div className="about-page-container p-5">
      <section className="about-hero">
        <h1>About MUFT</h1>
        <p>Your partner in career growth and skill development.</p>
      </section>

      <section className="about-content">
        <div className="mission-vision">
          <h2>Our Mission</h2>
          <p>To empower individuals with the knowledge and skills necessary to thrive in today's dynamic job market through accessible and high-quality online education.</p>
          <h2>Our Vision</h2>
          <p>To be the leading platform for career advice and skill development, fostering a community of lifelong learners and successful professionals.</p>
        </div>

        {/* <div className="our-team">
          <h2>Meet Our Team</h2>
          <div className="team-members">

            <div className="team-member-card">
              <img src="https://via.placeholder.com/150" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member-card">
              <img src="https://via.placeholder.com/150" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Head of Education</p>
            </div>

          </div>
        </div> */}

        <div className="our-values">
          <h2>Our Values</h2>
          <ul>
            <li>Excellence in Education</li>
            <li>Student Success Focus</li>
            <li>Innovation & Adaptability</li>
            <li>Community & Collaboration</li>
            <li>Integrity & Transparency</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;