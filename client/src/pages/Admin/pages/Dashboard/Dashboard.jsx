import React, { useState } from "react";
import { FaUsers, FaBriefcase, FaSignOutAlt, FaBell, FaSearch, FaCog } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import "./Dashboard.css";

import Topbar from "../../components/Topbar/Topbar";


import VacancyPage from "../../pages/Vacancy/Vacancy";
import DefaultPage from "./DefaultPage";
import ApplicationList from "../Applications/ApplicationList";
import ApplicationsPage from "../Applications/ApplicationList";
import InquiryPage from "../Inquiry/InquiryPage";
function Dashboard() {
 
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [activeTab, setActiveTab] = useState("AdminPanel");

  

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedOut(true);
  };


  if (isLoggedOut) return <Navigate to="/admin/auth" replace />;
  const renderContent = () => {
    switch (activeTab) {
      case "vacancies":
        return <VacancyPage />;
      case "applications":
        return <ApplicationsPage/>;
       case "inquiries":
         return <InquiryPage/>;
      case "AdminPanel":
        return <DefaultPage />;
      default:
        return <DefaultPage />;
    }
  };
  console.log(activeTab);
  return (

    <div className="min-h-screen bg-gray-50">
      
      <Topbar title="Admin Panel"
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout} />
         <main className="p-6">
        {renderContent()}
      </main>
      
    </div>
  );
}

export default Dashboard;