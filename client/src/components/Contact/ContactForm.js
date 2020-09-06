import React, { useState } from "react";
import axios from "axios";
const PORT = process.env.PORT || 5000;

const ContactForm = () => {
  const [sendEmail, setSendEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = sendEmail;

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setSendEmail({ ...sendEmail, [name]: value });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:${PORT}/send-email`, sendEmail);
      setSendEmail({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSendEmail({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group-1">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onInputChange}
            required
          />
        </div>
      </div>
      <div className="input-group-2">
        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={onInputChange}
            required
          />
        </div>
      </div>
      <div className="input-group-3">
        <div className="form-group">
          <label>Message</label>
          <textarea
            type="text"
            name="message"
            value={message}
            onChange={onInputChange}
            required
          />
        </div>
      </div>

      <button className="form-btn">Submit</button>
    </form>
  );
};

export default ContactForm;
