import React, { useState } from 'react';
import './Demo.css';

/**
 * Demo request page providing a contact form for potential customers to
 * get in touch.  No data is actually sent anywhere – instead a
 * success message is displayed upon submission.
 */
function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application this is where you'd send the data to your
    // backend or third‑party service.  We simply reset the form and
    // show a success message.
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <main className="demo">
      <section className="demo__hero">
        <h1 className="demo__title">Request a Demo</h1>
        <p className="demo__subtitle">
          Ready to experience SabCore? Fill out the form below and our team will
          get back to you shortly.
        </p>
      </section>
      <section className="demo__formSection">
        {submitted ? (
          <div className="demo__success">
            <h2>Thank you!</h2>
            <p>Your request has been received. We’ll be in touch soon.</p>
          </div>
        ) : (
          <form className="demo__form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="name">Name</label>
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
              <label htmlFor="email">Email</label>
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
                required
              />
            </div>
            <div className="form__group form__group--full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>
            <button type="submit" className="demo__submit">
              Submit Request
            </button>
          </form>
        )}
      </section>
    </main>
  );
}

export default Demo;