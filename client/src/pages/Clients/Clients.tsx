import React from "react";
import ClientHero from "./components/ClientHero";
import RecruitmentPage from "./components/RecruitmentPage";
import ClientsSection from "./components/ClientsSection";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

import "./Clients.css"; 

const Clients: React.FC = () => {
  return (
    <div className="clients-page">
      <div className="clients-overlay">
        <ClientHero/>
        <RecruitmentPage/>
        <ClientsSection/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default Clients;
