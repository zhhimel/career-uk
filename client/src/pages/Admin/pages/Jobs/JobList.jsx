import React, { useState, useEffect } from "react";
import "./Jobs.css";
import Topbar from "../../components/Topbar/Topbar";
import StatsCard from "../../components/StatsCard/StatsCard";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";
import Modal from "../../components/Modal/Modal";
import JobDetails from "./JobDetails";
import JobForm from "./JobForm";
import { FaBriefcase, FaPlus } from "react-icons/fa";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState("details");
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Simulated API call
    setJobs([
      { id: 1, title: "Frontend Developer", location: "Remote", type: "Full-Time", posted: "3 days ago" },
      { id: 2, title: "UI/UX Designer", location: "London", type: "Contract", posted: "1 week ago" },
      { id: 3, title: "Backend Engineer", location: "Manchester", type: "Part-Time", posted: "2 weeks ago" },
    ]);
  }, []);

  const handleRowClick = (job) => {
    setSelectedJob(job);
    setViewMode("details");
    setModalOpen(true);
  };

  const handleAddJob = () => {
    setSelectedJob(null);
    setViewMode("form");
    setModalOpen(true);
  };

  return (
    <div className="jobs-page">
      <Topbar title="Jobs Management" onLogout={() => alert("Logout")} />

      <div className="jobs-header">
        <StatsCard title="Total Jobs" value={jobs.length} icon={<FaBriefcase />} />
        <button className="jobs-add-btn" onClick={handleAddJob}>
          <FaPlus className="icon" /> Add Job
        </button>
      </div>

      <div className="jobs-table">
        <Table
          columns={["Title", "Location", "Type", "Posted"]}
          data={jobs.map((j) => ({
            Title: j.title,
            Location: j.location,
            Type: j.type,
            Posted: j.posted,
          }))}
          onRowClick={(row) => {
            const job = jobs.find((j) => j.title === row.Title);
            if (job) handleRowClick(job);
          }}
        />
        <Pagination currentPage={page} totalPages={3} onPageChange={setPage} />
      </div>

      <Modal
        isOpen={modalOpen}
        title={viewMode === "details" ? "Job Details" : "Add Job"}
        onClose={() => setModalOpen(false)}
      >
        {viewMode === "details" && selectedJob && <JobDetails job={selectedJob} />}
        {viewMode === "form" && <JobForm onSave={() => setModalOpen(false)} />}
      </Modal>
    </div>
  );
};

export default JobList;
