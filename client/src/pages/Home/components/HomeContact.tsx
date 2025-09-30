import React from "react";
import "./HomeContact.css";

const HomeContact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-info">
          <p className="contact-subtitle">CONTACT US</p>
          <h2 className="contact-title">
            Get In <span>Touch</span>
          </h2>
          <p className="contact-description">
            Contact us today to discuss your temporary and permanent staffing
            requirements and discover how BreezNest Ltd can support your business
            with reliable, qualified, and flexible workforce solutions. Our team
            is ready to assist you and provide the exceptional service you
            deserve.
          </p>

          <div className="contact-details">
            <p>
              📞 <a href="tel:+447532848379">+44 7532 848379</a>
            </p>
            <p>
              🏠 Office address: 1st Floor 218-220 Whitechapel Road London E1 1BJ
            </p>
            <p>
              ☎ <a href="tel:02079930058">020 7993 0058</a>
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-form">
          <form>
            <label>Name</label>
            <input type="text" placeholder="Name" required />

            <label>Email</label>
            <input type="email" placeholder="Email" required />

            <label>Message</label>
            <textarea placeholder="Message" rows={3} required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
