import React from "react";

const Navbar = ({ activeTab, onTabChange, onLogout }) => {
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

  return (
    <nav style={styles.container}>
      <div style={styles.left}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            style={styles.tab(activeTab === tab.key)}
            onClick={() => onTabChange(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <button style={styles.logout} onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
