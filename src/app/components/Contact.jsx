"use client";

import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // For example, you can send a POST request to a server-side API
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="contact-page-container">
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Send Message</button>
        </form>
        {submitted ? (
          <p>Thank you for submitting your message!</p>
        ) : (
          <p>Please fill out the form and submit to send us a message.</p>
        )}
      </div>
    </div>
  );
}

export default Contact;
