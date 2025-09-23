import React from "react";
import "./CandidateHero.css";
import heroImage from "../../../assets/images/candidates/hero.png"; // make sure path is correct

const CandidateHero: React.FC = () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="Candidates Hero" className="hero-bg" />

      <div className="hero-overlay">
        <h1 className="hero-title">CANDIDATES</h1>

        <div className="hero-breadcrumb">
          <span className="home-link">HOME</span> – CANDIDATES
        </div>
      </div>
    </div>
  );
};

export default CandidateHero;
