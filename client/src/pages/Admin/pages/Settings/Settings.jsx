import React, { useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Modal from "../../components/Modal/Modal";

const Settings = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [settings, setSettings] = useState({
    username: "admin",
    email: "admin@example.com",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    alert("Settings saved!");
    setModalOpen(false);
  };

  const pageStyles = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#f5f5f5",
    minHeight: "100vh",
  };

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    maxWidth: "400px",
  };

  const inputStyles = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const checkboxLabelStyles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const buttonStyles = {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={pageStyles}>
      <Topbar title="Settings" onLogout={() => alert("Logout")} />

      <div style={{ marginTop: "20px" }}>
        <form style={formStyles} onSubmit={(e) => e.preventDefault()}>
          <label>
            Username:
            <input
              style={inputStyles}
              type="text"
              name="username"
              value={settings.username}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              style={inputStyles}
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
            />
          </label>

          <label style={checkboxLabelStyles}>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
            />
            Enable Notifications
          </label>

          <button type="button" style={buttonStyles} onClick={handleSave}>
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
