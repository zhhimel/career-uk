import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock  } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Address Section */}
        <div className="footer-column">
          <h4>Address</h4>
          <p className="footer-item">
            <FaMapMarkerAlt className="icon" /> Office address: 1st Floor, 218–220
            Whitechapel Road, London E1 1BJ
          </p>
          <p className="footer-item">
            <FaClock className="icon" /> Mon – Sun: 9:00 AM – 5:00 PM
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p className="footer-item">
            <FaPhoneAlt className="icon" /> +44 7532 848379
          </p>
          <p className="footer-item">
            <FaPhoneAlt className="icon" /> 020 7993 0058
          </p>
          <p className="footer-item">
            <FaEnvelope className="icon" /> contact@breeznest.co.uk
          </p>
        </div>

        {/* Services Section */}
        <div className="footer-column">
          <h4>OUR SERVICES</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Candidates</li>
            <li>Modern Slavery Statement</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-column">
          <h4>SOCIAL MEDIA</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>CareerUp© 2025 All rights reserved</p>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
