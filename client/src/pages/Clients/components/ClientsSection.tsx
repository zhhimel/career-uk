import React from "react";
import "./ClientsSection.css";
import peopleImg from "../../../assets/images/candidates/people1.jpg"; // replace with actual image path
import circleImg from "../../../assets/images/candidates/circle.png";// replace with actual green circle image

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="#065d86"
  >
    <path d="M20.285 6.709l-11.285 11.291-5.285-5.291 1.414-1.414 3.871 3.877 9.871-9.877z" />
  </svg>
);

const ClientsSection = () => {
  return (
    <section className="clients-section">
      {/* Left Side - Image */}
      <div className="clients-image-wrapper">
        <img src={peopleImg} alt="People waiting" className="clients-image" />
        <img src={circleImg} alt="Green Circle" className="clients-circle-overlay" />
      </div>

      {/* Right Side - Content */}
      <div className="clients-content">
        <h2>
          At Careerup Ltd, we provide our clients with:
        </h2>

        <ul className="clients-list">
          <li>
            <CheckIcon />
            Our recruitment process is meticulous and comprehensive, ensuring
            that we carefully evaluate and assess candidates to find the best
            for our clients.
          </li>
          <li>
            <CheckIcon />
            Our Temporary and Permanent Staff solution provides added value to
            your financial performance and overall business success.
          </li>
        </ul>

        <h2>What is the ultimate outcome?</h2>

        <ul className="clients-list">
          <li>
            <CheckIcon />
            The vacancies are promptly filled with highly suitable and qualified
            personnel.
          </li>
          <li>
            <CheckIcon />
            Our services help you achieve cost savings and optimize your
            expenses.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ClientsSection;
