import React from "react";
import "./ContactUsMain.css";

const ContactUsMain: React.FC = () => {
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
            requirements and discover how CareerUp Ltd can support your business
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

      {/* Map Section */}
      <div className="contact-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d79467.55084326147!2d-0.12204187101106119!3d51.50659338624518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2sus!4v1758832692395!5m2!1sen!2sus"
          width="100%"
          height="800"
          style={{ border: 0, width: "100%", height: "800px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsMain;
