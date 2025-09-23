import React from 'react';
import './MissionVisionSection.css'; // Create this CSS file

// Placeholder icons - you'll need actual SVG/PNG files for these
import diamondIcon from '../../assets/diamond-icon.svg'; // Icon for Mission
import brainGearIcon from '../../assets/brain-gear-icon.svg'; // Icon for Vision

const MissionVisionSection = () => {
  return (
    <section className="mission-vision-section">
      <div className="wave-background"></div> {/* For the top wave design */}

      <div className="mission-vision-content-wrapper">
        {/* Left column: Who We Are text */}
        <div className="mission-vision-text-column">
          <p className="section-subtitle">Careerup Ltd</p>
          <h2>Who We Are</h2> {/* This "Who We Are" is a separate text block, not the previous section */}
          <p>
            Careerup Ltd is a prominent recruitment agency, renowned for its
            expertise in the field. Whether your business requires assistance with
            temporary or permanent positions, we are well-equipped to lend a
            helping hand. Our client-centric approach ensures that we not only
            provide high-caliber candidates but also offer valuable insights
            to enhance your business.
          </p>
        </div>

        {/* Right column: Mission and Vision cards */}
        <div className="mission-vision-cards-column">
          <div className="card mission-card">
            <div className="card-icon">
              {/* <img src={diamondIcon} alt="Diamond icon" /> */}
            </div>
            <div className="card-text">
              <h3>Mission</h3>
              <p>
                To connect exceptional talent with forward-thinking organizations, enabling innovation,
                growth, and success across industries.
              </p>
            </div>
          </div>

          <div className="card vision-card">
            <div className="card-icon">
              {/* <img src={brainGearIcon} alt="Brain and gear icon" /> */}
            </div>
            <div className="card-text">
              <h3>Vision</h3>
              <p>
                To be the leading bridge between top talent and visionary employers, transforming
                workplaces and shaping a thriving future for businesses and professionals alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;