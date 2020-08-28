import React from "react";

import ContactForm from "./ContactForm";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-heading">
        <h1>Contact</h1>
      </div>
      <div className="contact-content">
        <div className="contact-picture" />
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
