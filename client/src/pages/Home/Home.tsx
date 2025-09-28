import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import MissionVisionSection from "../aboutUs/MissionVisionSection/MissionVisionSection";
import ServicesWeOffered from "./components/ServicesWeOffered";
import Services from "./components/Services";
import Contact from "../../components/Contact/Contact";

import "./Home.css"; 
import HomeAbout from "./components/HomeAbout";
import HomeContact from "./components/HomeContact";


const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-overlay">
        <Carousel />
        <HomeAbout/>
        <MissionVisionSection/>
        <ServicesWeOffered/>
        <Services/>
        <Contact/>
        <HomeContact/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
