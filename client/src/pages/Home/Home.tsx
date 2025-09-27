import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import AboutSection from "../aboutUs/aboutContentSection/aboutContentSection";
import MissionVisionSection from "../aboutUs/MissionVisionSection/MissionVisionSection";
import ServicesWeOffered from "./components/ServicesWeOffered";
import Services from "./components/Services";
import Contact from "../../components/Contact/Contact";

import "./Home.css"; 


const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-overlay">
        <Carousel />
        <AboutSection/>
        <MissionVisionSection/>
        <ServicesWeOffered/>
        <Services/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
