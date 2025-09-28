import React from "react";
import "./Contact.css";

const CandidateContact: React.FC = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-text">
        Feel free to use the contact form below to reach out to us.
        We will respond to your message as promptly as we can.
      </p>
      <a href="/contact-us" className="contact-us-btn">
        Click Here
      </a>

    </div>
  );
};

export default CandidateContact;
