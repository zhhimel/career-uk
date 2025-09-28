import React from "react";
import "./ServicesWeOffered.css";
import PeopleImg from "../../../assets/images/service/service-offered.png";
import GreenImg from "../../../assets/images/candidates/circle.png";
import SectorsImg from "../../../assets/images/service/sectors-we-serve.png";

const ServicesWeOffered: React.FC = () => {
  return (
    <section className="services">
      <div className="services-content">
        {/* Left Side Text */}
        
        <div className="services-text">
           {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 md:w-12 h-1 bg-green-500"></div>
                <span
                    className="text-xl md:text-2xl tracking-widest text-gray-500 font-bold"
                    style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '0.3em' }}
                >
                    Our Services
                </span>
            </div>

          <h2 className="title">Services Offered</h2>
          <p className="description">
            We are a dynamic recruitment agency dedicated to connecting exceptional
            professionals with forward-thinking organizations. Our mission is to
            empower businesses by providing top-tier talent while helping job seekers
            achieve their career aspirations.
          </p>
          <ul className="services-list">
            <li>Recruitment and Talent Placement</li>
            <li>Temporary, Permanent and Contract staffing</li>
          </ul>
        </div>

        {/* Right Side Images */}
        <div className="services-images">
          <div className="people-image">
            <img  src={PeopleImg} alt="People" />
          </div>
          <div className="circle-image">
            <img src={GreenImg} alt="Circle" />
          </div>
        </div>
      </div>

      {/* Bottom Full-Width Image */}
      <div className="services-bottom-image">
        <a href="/candidates">
          <img src={SectorsImg} alt="Sectors We Serve" />
        </a>
      </div>

    </section>
  );
};

export default ServicesWeOffered;
