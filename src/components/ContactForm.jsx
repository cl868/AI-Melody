import React, { useState } from "react";
import "../App.css";

function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>GET IN TOUCH</h2>
      <div className="form-row">
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
      </div>
      <input name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required type="email" />
      <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
      <select name="subject" value={form.subject} onChange={handleChange} required>
        <option value="">Subject</option>
        <option value="demo">Book a Demo</option>
        <option value="support">Support</option>
        <option value="other">Other</option>
      </select>
      <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
      <button type="submit" className="cta-button">Submit</button>
    </form>
  );
}

export default ContactForm;