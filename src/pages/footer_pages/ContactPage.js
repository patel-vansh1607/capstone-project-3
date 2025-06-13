import React from 'react';
import '../../styles/footer_pages/ContactPage.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const Contact = () => {
  return (
    <div>
        <Navbar />
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Have questions or need help? Reach out to us using the form below.</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" placeholder="Type your message here..." rows="5"></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
    <Footer />
    </div>
  )
};

export default Contact;
