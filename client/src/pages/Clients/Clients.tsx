import React from "react";
import ClientHero from "./components/ClientHero";
import RecruitmentPage from "./components/RecruitmentPage";

const Clients: React.FC = () => {
  return (
    <div className="candidates-page">
      <ClientHero/>
      <RecruitmentPage/>
    </div>
  );
};

export default Clients;
