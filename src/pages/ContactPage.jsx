// src/pages/ContactPage.js
import React from 'react'; // Create this CSS file
import { FaClock, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



function ContactPage() {
  return (
    <div className="contact-page-container p-5">

      <h1>Contact Us</h1>
              <hr />
      <section className="contact-info-section">
        <div className="contact-details">
          {/* <h2>Get in Touch</h2> */}
          <p>We'd love to hear from you!</p>
          <p><FaMapMarkerAlt /> Address: Head Office: Geeky Academy Institue, Ahmednagar Chatha, Gujranwala, Punjab, Pakistan (52070)</p>
          <p><FaPhone /> Phone: +92 342-3181625</p>
          <p><MdEmail /> Email: contactus@geekyacademy.com</p>
          <p><FaClock /> Business Hours: Mon-Fri, 9:00 AM - 5:00 PM (PKT)</p>
        </div>
        <br />
        <section className="map-section">
        <h2>Find us on the Map</h2>
                <hr />
        {/* Embed a Google Map here using an iframe or a React map library */}
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502.21873908632756!2d73.9872695234018!3d32.31151373932164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f3b7ec74076f7%3A0xdda69a8e39319c1b!2sAhmad%20Nagar%20Chattha%2C%20Pakistan!5e0!3m2!1sen!2s!4v1750792910748!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

        {/* <div className="contact-form-container">
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
          </form> */}
        {/* </div> */}
      </section>

    </div>
  );
}

export default ContactPage;