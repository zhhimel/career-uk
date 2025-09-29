import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ add this
import "./vacancies.css";

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/vacancies");
        const json = await res.json();
        setVacancies(Array.isArray(json.data) ? json.data : []);
      } catch (err) {
        setError(err.message || "Error fetching vacancies");
      } finally {
        setLoading(false);
      }
    };
    fetchVacancies();
  }, []);

  const makeSlug = (title, id) =>
    title
      ? `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${id.slice(-6)}`
      : id;

  const filteredVacancies = vacancies.filter((v) =>
    (v.title || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="job-search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title..."
          className="keywords-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {filteredVacancies.map((job) => (
        <div key={job._id} className="job-card">
          <div className="job-details">
            <h3 className="job-title">{job.title || "Untitled Job"}</h3>
            <p className="job-description">
              {job.description ? job.description.slice(0, 150) : "No description"}...
            </p>
            <div className="job-actions">
              <button className="quick-apply-button">Quick Apply</button>

              {/* ✅ Navigate to slug page */}
              <button
                className="read-more-button"
                onClick={() => navigate(`/vacancies/${makeSlug(job.title, job._id)}`)}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="job-posted-date">
            {job.postedAt &&
              `Posted ${new Date(job.postedAt).toLocaleDateString()}`}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vacancies;
