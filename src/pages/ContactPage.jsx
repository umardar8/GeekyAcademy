// src/pages/ContactPage.js
import React from 'react'; // Create this CSS file

function ContactPage() {
  return (
    <div className="contact-page-container">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </section>

      <section className="contact-info-section">
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p><i className="fas fa-map-marker-alt"></i> Address: 123 Education Lane, Knowledge City, Jamshoro, Sindh, Pakistan</p>
          <p><i className="fas fa-phone"></i> Phone: +92 314-1234567</p>
          <p><i className="fas fa-envelope"></i> Email: info@muft.com</p>
          <p><i className="fas fa-clock"></i> Business Hours: Mon-Fri, 9:00 AM - 5:00 PM (PKT)</p>
        </div>

        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <h2>Find Us on the Map</h2>
        {/* Embed a Google Map here using an iframe or a React map library */}
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.656519175402!2d68.25700889999999!3d25.43859735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c776fb0821d63%3A0xb35a3962d3a373b5!2sJamshoro%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1718919600000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default ContactPage;