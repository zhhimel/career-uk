import React from "react";
import "./ClientHero.css";
import heroImage from "../../../assets/images/clients/hero.png"; // make sure path is correct

const ClientHero: React.FC = () => {
  return (
    <div className="client-hero">
      <img src={heroImage} alt="Clients Hero" className="client-hero-bg" />

      <div className="client-hero-overlay">
        <h1 className="client-hero-title">CLIENTS</h1>

        <div className="client-hero-breadcrumb">
          <span className="client-home-link">HOME</span> – CLIENTS
        </div>
      </div>
    </div>
  );
};

export default ClientHero;
