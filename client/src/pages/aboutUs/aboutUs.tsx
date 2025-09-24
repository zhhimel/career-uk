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
// import growthIcon from '../assets/growth-icon.svg'; // Icon for "unwavering support"
// import checklistIcon from '../assets/checklist-icon.svg'; // Icon for "extensive experience"

// Re-using the Header section logic from previous interaction
const AboutUsHeader = () => {
  return (
    <header className="about-us-header">
      <div className="header-image-overlay"></div> {/* For the darkening effect */}
      <div className="header-content">
        <h1>ABOUT US</h1>
        <nav className="header-nav"> {/* Add a class to the nav for easier targeting */}
          <span>
            <a href="/" className="home-link">HOME</a> {/* Use Link for navigation */}
            {' '} - ABOUT US
          </span>
        </nav>
      </div>
      <div className="header-image-bg" style={{ backgroundImage: `url(${teamMeetingImage})` }}></div>
    </header>
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
      {/* Potentially a Footer component would go here */}
    </div>  
  );
};

export default AboutUsPage;