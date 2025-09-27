import React from "react";
import "./Topbar.css";

const Topbar = ({ title, onLogout }) => {
  return (
    <header className="topbar">
      <div className="topbar-title">{title}</div>
      <div className="topbar-actions">
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
