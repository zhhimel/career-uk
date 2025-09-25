import React from "react";
import "./ContactUsHero.css";
import heroImage from "../../../assets/images/contact-us/hero.png"; // make sure path is correct

const ContactUsHero: React.FC = () => {
  return (
    <div className="contact-us-hero">
      <img src={heroImage} alt="ContactUs Hero" className="contact-us-hero-bg" />

      <div className="contact-us-hero-overlay">
        <h1 className="contact-us-hero-title">CONTACT US</h1>

        <div className="contact-us-hero-breadcrumb">
          <span className="contact-us-home-link">HOME</span> – CONTACT US
        </div>
      </div>
    </div>
  );
};

export default ContactUsHero;
