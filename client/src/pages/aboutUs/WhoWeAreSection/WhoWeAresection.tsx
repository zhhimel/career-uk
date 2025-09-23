import React from 'react';
import './WhoWeAreSection.css'; // You'll create this CSS file
import whoWeAreImage from '../../../assets/images/whowearemeeting.png'; // Placeholder for the image

const WhoWeAreSection = () => {
  return (
    <section className="who-we-are-section">
      <div className="who-we-are-content">
        <p className="section-subtitle">Careerup Ltd</p>
        <h2>Who We Are</h2>
        <p>
          Our approach combines thoughtful analysis and heartfelt dedication.
          We attentively listen to your preferences, understand your
          requirements, and skillfully align you with a job that suits you perfectly.
        </p>
        <p>
          We consider everything from your career aspirations and personality
          to even your commuting needs – our comprehensive approach leaves
          no stone unturned.
        </p>
        <p>
          Our strategy centers around the recruitment and retention of
          exceptional individuals. We deeply value each team member as a
          distinct individual.
        </p>
      </div>
      <div className="who-we-are-visuals">
        <div className="orange-blob"></div> {/* For the orange shape */}
        <div className="who-we-are-image-container">
          <img src={whoWeAreImage} alt="Team collaboration" className="who-we-are-image" />
        </div>
        <div className="blue-dots-pattern"></div> {/* For the blue dotted background */}
      </div>
    </section>
  );
};

export default WhoWeAreSection;