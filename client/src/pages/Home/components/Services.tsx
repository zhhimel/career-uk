import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

// Import images from assets (replace with your actual paths)
import usersIcon from "../../../assets/images/service/s1.png";
import checkIcon from "../../../assets/images/service/s2.png";
import piggyBankIcon from "../../../assets/images/service/s3.png";
import headsetIcon from "../../../assets/images/service/s4.png";

const Services: React.FC = () => {
  return (
    <section className="services-container">
      {/* Top Content */}
      <div className="services-top">
        <div className="flex justify-center">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 md:w-12 h-1 bg-green-500"></div>
            <span
              className="text-xl md:text-2xl uppercase tracking-widest text-gray-500 font-bold"
              style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '0.3em' }}
            >
              Our Services
            </span>
          </div>
        </div>

        <h2 className="services-title">
          Empowering Connections, <span>Transforming Careers</span>
        </h2>
        <p className="services-text">
          We specialize in bridging the gap between exceptional talent and
          visionary organisations. As a trusted recruitment partner, we empower
          businesses to build high-performing teams while helping professionals
          unlock their full potential through meaningful career opportunities.
        </p>
      </div>

      {/* Middle Content */}
      <div className="services-middle">
        {/* First Pill Block */}
        <motion.div
          className="services-pill gradient"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="service">
            <div className="icon-circle">
              <img src={usersIcon} alt="Short-notice Supply" />
            </div>
            <div>
              <h3>Short - notice Supply</h3>
              <p><li>Supply of staff within short notice from a minimum of 24 hours</li></p>
            </div>
          </div>
          <div className="service">
            <div className="icon-circle">
              <img src={checkIcon} alt="Security Check" />
            </div>
            <div>
              <h3>Security Check</h3>
              <p><li>Each candidate is approved following a thorough DBS check.</li></p>
            </div>
          </div>
        </motion.div>

        {/* Second Pill Block */}
        <motion.div
          className="services-pill"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="service">
            <div className="icon-circle">
              <img src={piggyBankIcon} alt="Flexible Pricing" />
            </div>
            <div>
              <h3>Flexible Pricing</h3>
              <p><li>Scalable solutions with cost-effective and adaptable rates.</li></p>
            </div>
          </div>
          <div className="service">
            <div className="icon-circle">
              <img src={headsetIcon} alt="Authentic and Reliable" />
            </div>
            <div>
              <h3>Authentic and Reliable</h3>
              <p><li>
                24/7 helpline support ensures seamless service and immediate
                assistance whenever needed</li>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Button */}
      <div className="services-button">
        <a href="/candidates">
          <button>View All Services</button>
        </a>
      </div>

    </section>
  );
};

export default Services;
