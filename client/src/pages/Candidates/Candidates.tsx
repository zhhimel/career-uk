import React from "react";
import CandidateHero from "./components/CandidateHero";
import CandidateIntro from "./components/CandidateIntro";
import RecruitmentExpertise from "./components/RecruitmentExpertise";
import JobOpportunities from "./components/JobOpportunities";

const Candidates: React.FC = () => {
  return (
    <div className="candidates-page">
      <CandidateHero/>
      <CandidateIntro/>
      <RecruitmentExpertise/>
      <JobOpportunities/>
    </div>
  );
};

export default Candidates;
