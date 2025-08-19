import React, { useState } from 'react';
import './Contact.css';

/**
 * Contact page with contact form and company information.
 */
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <main className="contact">
      <section className="contact__intro">
        <h1 className="contact__heading">Contact Us</h1>
        <p className="contact__subheading">
          Get in touch with our team to learn how SabCore can transform your load testing
        </p>
      </section>

      <div className="contact__content">
        <section className="contact__form-section">
          <h2>Send us a message</h2>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form__group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="form__submit">
              Send Message
            </button>
          </form>
        </section>

        <section className="contact__info">
          <h2>Get in Touch</h2>
          <div className="info__item">
            <h3>Email</h3>
            <p>
              <a href="mailto:contact@sabcore.io">contact@sabcore.io</a>
            </p>
          </div>
          <div className="info__item">
            <h3>Sales Inquiries</h3>
            <p>
              <a href="mailto:sales@sabcore.io">sales@sabcore.io</a>
            </p>
          </div>
          <div className="info__item">
            <h3>Support</h3>
            <p>
              <a href="mailto:support@sabcore.io">support@sabcore.io</a>
            </p>
          </div>
          <div className="info__item">
            <h3>Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
          </div>
          <div className="info__item">
            <h3>Response Time</h3>
            <p>We typically respond within 24 business hours</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;