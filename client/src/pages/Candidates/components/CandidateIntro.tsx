import React from "react";
import "./CandidateIntro.css";
import peopleImage from "../../../assets/images/candidates/people.jpg";
import circleImage from "../../../assets/images/candidates/circle.png";

const CandidateIntro: React.FC = () => {
  return (
    <section className="candidate-intro-container">
      <div className="candidate-intro-wrapper">
        {/* LEFT: Text */}
        <div className="candidate-text slide-in-left">
          <h4 className="candidate-subtitle">CANDIDATES</h4>
          <h2 className="candidate-title">
            Register with us to explore the next step in your{" "}
            <span className="highlight">career journey</span>
          </h2>

          <div className="candidate-description">
            <p>
              We recognize the significant of choosing your next career move,
              and we prioritize ensuring it is the right decision for you. That's
              why we offer personal consultations to understand your unique
              situation and preferences. Based on this information, we will
              only reach out to you regarding opportunities that align with
              your specific requirements.
            </p>

            <p>
              Our utmost commitment to you is that we will never pressure you
              into a decision that doesn't feel right. Our role is not to
              convince you to accept a position you're not interested in, but
              rather to provide advice on opportunities that we believe may be
              of interest to you. Some positions may appeal to you while others
              may not, and ultimately, the choice will always be yours to make.
            </p>
          </div>
        </div>

        <div className="candidate-image-wrapper" aria-hidden="true">
          <img src={peopleImage} alt="Candidates" className="people" />
          <img src={circleImage} alt="" className="circle overlay" />
        </div>
      </div>
    </section>
  );
};

export default CandidateIntro;
