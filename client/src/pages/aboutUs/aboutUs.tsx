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
const AboutContentSection = () => {
  return (
    <section className="about-content-section">
      <div className="about-description-gla">
        <p className="section-subtitle">ABOUT US</p>
        <h2>About <span className="highlight">Careerup</span> Ltd</h2>
        <p>
          Our approach combines thoughtful analysis and heartfelt dedication.
          We attentively listen to your preferences, understand your
          requirements, and skillfully align you with a job that suits you perfectly.
          We consider everything from your career aspirations and personality
          to even your commuting needs – our comprehensive approach leaves
          no stone unturned in finding your ideal role.
        </p>
        <p>
          Careerup Ltd is proud to hold the Gangmasters and Labour Abuse
          Authority (GLAA) license, which reflects our commitment to ensuring
          fair and ethical practices within the recruitment industry. The GLAA is
          responsible for regulating and monitoring labour exploitation within
          industries such as food processing. By holding this license, Careerup
          Ltd guarantees that all workers are provided with safe, ethical working
          conditions, fair pay, and appropriate support. This license also ensures
          that we comply with strict standards to prevent the exploitation of
          vulnerable workers, offering them the security and protection they
          deserve.
        </p>
      </div>

      <div className="about-visuals-and-features">
        <div className="visuals-container">
          <div className="circular-image-wrapper circular-image-left">
            <img src={candidateWorkingImage} alt="Candidate working" className="circular-image" />
          </div>
          <div className="circular-image-wrapper circular-image-right">
            <img src={recruiterWorkingImage} alt="Recruiter working" className="circular-image" />
          </div>
          <div className="dots-pattern"></div> {/* For the dotted background */}
          <div className="green-blob-right"></div> {/* For the green shape */}
        </div>

        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon-circle">
              {/* <img src={growthIcon} alt="Growth icon" /> */}
            </div>
            <p>
              We provide unwavering support throughout your career journey,
              ensuring that we are always within reach whenever you require
              assistance. Whether it's guidance, advice, or any other form of
              support, we are just a phone call away.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-circle">
              {/* <img src={checklistIcon} alt="Checklist icon" /> */}
            </div>
            <p>
              With every candidate's job search, we leverage our
              extensive experience to provide valuable expertise and
              guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main AboutUsPage component
const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <AboutUsHeader />
      <AboutContentSection />
      <WhoWeAreSection />
      <ExpertiseDynamismSection/>
      <MissionVisionSection/>
      {/* Potentially a Footer component would go here */}
    </div>  
  );
};

export default AboutUsPage;