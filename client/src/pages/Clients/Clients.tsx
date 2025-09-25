import React from "react";
import ClientHero from "./components/ClientHero";
import RecruitmentPage from "./components/RecruitmentPage";
import ClientsSection from "./components/ClientsSection";

const Clients: React.FC = () => {
  return (
    <div className="candidates-page">
      <ClientHero/>
      <RecruitmentPage/>
      <ClientsSection/>
    </div>
  );
};

export default Clients;
