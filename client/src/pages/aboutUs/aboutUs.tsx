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



// Main AboutUsPage component
const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <AboutSection />
      <WhoWeAreSection />
      <DetailsSection/>
      <MissionVisionSection/>
      {/* Potentially a Footer component would go here */}
    </div>  
  );
};

export default AboutUsPage;