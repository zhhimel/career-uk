import React, { useState, useEffect } from "react";
import Topbar from "../../components/Topbar/Topbar";
import StatsCard from "../../components/StatsCard/StatsCard";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";
import Modal from "../../components/Modal/Modal";
import ApplicationDetails from "./ApplicationDetails";
import ApplicationForm from "./ApplicationForm";
import { FaUsers, FaPlus } from "react-icons/fa";

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState("details");
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    setApplications([
      { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Graphic Designer", status: "Pending", applied: "3 days ago" },
      { id: 2, name: "Bob Lee", email: "bob@example.com", role: "Frontend Developer", status: "Interviewed", applied: "1 week ago" },
      { id: 3, name: "Carol Smith", email: "carol@example.com", role: "Backend Engineer", status: "Hired", applied: "2 weeks ago" },
    ]);
  }, []);

  const handleRowClick = (app) => {
    setSelectedApp(app);
    setViewMode("details");
    setModalOpen(true);
  };

  const handleAddApp = () => {
    setSelectedApp(null);
    setViewMode("form");
    setModalOpen(true);
  };

  const pageStyles = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#f5f5f5",
    minHeight: "100vh",
  };

  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };

  const addButtonStyles = {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const tableContainerStyles = {
    background: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  return (
    <div style={pageStyles}>
      <Topbar title="Applications" onLogout={() => alert("Logout")} />

      <div style={headerStyles}>
        <StatsCard title="Total Applications" value={applications.length} icon={<FaUsers />} />
        <button style={addButtonStyles} onClick={handleAddApp}>
          <FaPlus /> Add Application
        </button>
      </div>

      <div style={tableContainerStyles}>
        <Table
          columns={["Name", "Email", "Role", "Status", "Applied"]}
          data={applications.map((a) => ({
            Name: a.name,
            Email: a.email,
            Role: a.role,
            Status: a.status,
            Applied: a.applied,
          }))}
          onRowClick={(row) => {
            const app = applications.find((a) => a.email === row.Email);
            if (app) handleRowClick(app);
          }}
        />
        <Pagination currentPage={page} totalPages={2} onPageChange={setPage} />
      </div>

      <Modal
        isOpen={modalOpen}
        title={viewMode === "details" ? "Application Details" : "Add Application"}
        onClose={() => setModalOpen(false)}
      >
        {viewMode === "details" && selectedApp && <ApplicationDetails application={selectedApp} />}
        {viewMode === "form" && <ApplicationForm onSave={() => setModalOpen(false)} />}
      </Modal>
    </div>
  );
};

export default ApplicationList;
