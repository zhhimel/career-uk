import React from "react";
import { useEffect} from 'react';
import CandidateHero from "./components/CandidateHero";
import CandidateIntro from "./components/CandidateIntro";
import RecruitmentExpertise from "./components/RecruitmentExpertise";
import JobOpportunities from "./components/JobOpportunities";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

import "./Candidates.css"; 

const Candidates: React.FC = () => {
  useEffect(() => {
      document.title = "Candidates - BreezNest Ltd"; // Set tab title
    }, []);
  return (
    <div className="candidates-page">
      <div className="candidates-overlay">
        <CandidateHero />
        <CandidateIntro />
        <RecruitmentExpertise />
        <JobOpportunities />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default Candidates;
