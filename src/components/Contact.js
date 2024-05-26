import React, { useState } from 'react';
import './css/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('New message from ' + name);
    const body = encodeURIComponent(message);
    window.location.href = 'mailto:idinreborn@gmail.com' + '?subject=' + subject + '&body=' + body;
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
