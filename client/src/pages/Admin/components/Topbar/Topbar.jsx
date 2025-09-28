import React from "react";
import "./Topbar.css";
import VacancyPage from "../../pages/Vacancy/Vacancy";
const tabs = [
  { key: "vacancies", label: "Vacancies" },
  { key: "applications", label: "Job Applications" },
  { key: "inquiries", label: "Inquiry Forms" },
  
];
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#222",
    color: "#fff",
  },
  left: { display: "flex", gap: "20px" },
  tab: (isActive) => ({
    cursor: "pointer",
    padding: "6px 12px",
    borderBottom: isActive ? "2px solid #61dafb" : "2px solid transparent",
    color: isActive ? "#61dafb" : "#fff",
    transition: "0.2s",
  }),
  logout: {
    padding: "6px 12px",
    background: "#e74c3c",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
    cursor: "pointer",
  },
};

const Topbar = ({ title, onLogout, activeTab, onTabChange, }) => {
  return (
    <header className="topbar">
      <button className="topbar-title" onClick={() => onTabChange("AdminPanel")} >{title}</button>
      <div style={styles.left}>{tabs.map((tab) => (
        <div
          key={tab.key}
          style={styles.tab(activeTab === tab.key)}
          onClick={() => onTabChange(tab.key)}
        >
          {tab.label}
        </div>
      ))}</div>

      <div className="topbar-actions">
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
