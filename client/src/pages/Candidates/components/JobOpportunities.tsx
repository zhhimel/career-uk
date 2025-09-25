import React from 'react';
import './JobOpportunities.css';

// Import images from assets folder
import peopleImg from "../../../assets/images/candidates/people1.jpg";
import greenCircleImg from "../../../assets/images/candidates/circle.png";

const JobOpportunities = () => {
  return (
       <section className="candidate-people">
            <div className="people-page">
              <div className="image-container">
                <img src={peopleImg} alt="People sitting" className="people-img" />
                <img src={greenCircleImg} alt="Decorative circle" className="circle-img" />
              </div>
              <div className="text-container">
                <p>
                  To stay informed about upcoming opportunities, you have the option to
                  register with us and specify your preferred job vacancies. By doing so,
                  you can receive timely notifications tailored to your interests and stay
                  connected with potential future opportunities.
                </p>
              </div>
            </div>
       </section>
  );
};

export default JobOpportunities;