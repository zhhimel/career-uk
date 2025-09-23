import React from 'react';
import './ExpertiseDynamismSection.css'; // Create this CSS file
import handshakeImage from '../../../assets/images/handshake-professional.png'; // Placeholder for the image

const ExpertiseDynamismSection = () => {
  return (
    <section className="expertise-dynamism-section">
      <div className="expertise-dynamism-visuals">
        <div className="purple-blob"></div> {/* For the purple shape */}
        <div className="handshake-image-container">
          <img src={handshakeImage} alt="Professional handshake" className="handshake-image" />
        </div>
      </div>
      <div className="expertise-dynamism-content">
        <p className="section-subtitle">DETAILS</p>
        <p className="main-statement">
          The fusion of our experienced expertise and youthful dynamism allows us to
          challenge conventional thinking, ensuring we stay innovative and ahead of
          the curve.
        </p>
        <ul className="details-list">
          <li>
            We understand the importance of maintaining a healthy work-life
            balance, and we strongly believe in tailoring your job to suit your needs.
          </li>
          <li>
            Join our team and leverage our strong presence in the life science
            sector, working with leading clients. You'll have the chance to contribute to our
            existing client base, enabling you to make an immediate impact and excel in your
            role.
          </li>
          <li>
            Join us in our expansion phase and help us take our organization to new
            heights. As a valuable member of our team, you will have the opportunity to play a
            key role in our journey, champion our organization, and contribute to its
            growth. Together, we can redefine industry standards and achieve remarkable
            success.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExpertiseDynamismSection;