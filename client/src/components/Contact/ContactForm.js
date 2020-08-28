import React from "react";

const ContactForm = () => {
  return (
    <form>
      <div className="input-group-1">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
      </div>
      <div className="input-group-2">
        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" required />
        </div>
      </div>
      <div className="input-group-3">
        <div className="form-group">
          <label>Message</label>
          <textarea type="text" name="message" required />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
