import React from 'react';
import './AboutUsPage.css'; // Make sure this CSS file exists

// Import your images for the circular sections and icons
// You'll need to replace these paths with your actual image files
 import teamMeetingImage from '../../assets/images/team-photo.png'; // Placeholder for your header image
 import candidateWorkingImage from '../../assets/images/candidate-working.png'; // Image for the left circular section
 import recruiterWorkingImage from '../../assets/images/recruiter-working.png'; // Image for the right circular section
import WhoWeAreSection from './WhoWeAreSection/WhoWeAresection';
import ExpertiseDynamismSection from './ExpertiseDynamismSection/ExpertiseDynamismSection';
import MissionVisionSection from './MissionVisionSection/MissionVisionSection';
import AboutContentSection from './aboutContentSection/aboutContentSection';
import AboutSection from './aboutContentSection/aboutContentSection';
import DetailsSection from './ExpertiseDynamismSection/ExpertiseDynamismSection';
import { useEffect, useRef } from 'react';
// import growthIcon from '../assets/growth-icon.svg'; // Icon for "unwavering support"
// import checklistIcon from '../assets/checklist-icon.svg'; // Icon for "extensive experience"
import heroImage from "../../assets/images/candidates/hero.png"; // make sure path is correct
import Footer from '../../components/Footer/Footer';
// Re-using the Header section logic from previous interaction
const AboutUsHeader = () => {
  useEffect(() => {
    document.title = "About Us - Careerup Ltd"; // Set tab title
  }, []);
  return (
    <div className="hero">
      <img src={heroImage} alt="Candidates Hero" className="hero-bg" />

      <div className="hero-overlay">
        <h1 className="hero-title">About Us</h1>

        <div className="hero-breadcrumb">
          <span className="home-link">HOME</span> – About
        </div>
      </div>
    </div>
  );
};

// New component for the detailed about content



// Main AboutUsPage component
const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <AboutUsHeader />
      <AboutSection />
      <WhoWeAreSection />
      <DetailsSection/>
      <MissionVisionSection/>
      <Footer/>
      {/* Potentially a Footer component would go here */}
    </div>  
  );
};

export default AboutUsPage;