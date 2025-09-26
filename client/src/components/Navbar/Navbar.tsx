import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png"; // ✅ import logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      {/* Top Banner */}
      <div className="top-banner">
        <p>GLAA Licence Number is CARE0029</p>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="navbar-content">
          <div className="navbar-inner">
            
            {/* ✅ Logo with Image */}
            <div className="logo-container">
              <img src={logo} alt="CareerUP Logo" className="logo-img" />
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu">
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/candidates">Candidates</a>
              <a href="/clients">Clients</a>
              <a href="/contact-us">Contact Us</a>
              <a href="#">Vacancies</a>
              <a href="#">Job Application Form</a>
              <a href="#">Recruitment Inquiry Form</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-btn">
              <button onClick={toggleMenu}>
                {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/candidates">Candidates</a>
            <a href="/clients">Clients</a>
            <a href="/contact-us">Contact Us</a>
            <a href="#">Vacancies</a>
            <a href="#">Job Application Form</a>
            <a href="#">Recruitment Inquiry Form</a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
