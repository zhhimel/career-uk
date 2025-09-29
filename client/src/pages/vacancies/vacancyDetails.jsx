import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./vacancyDetails.css";

const VacancyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [vacancy, setVacancy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null
  });

  // Extract ID from slug (last 6 characters after the last dash)
  const extractIdFromSlug = (slug) => {
    if (!slug) return null;
    const parts = slug.split('-');
    const lastPart = parts[parts.length - 1];
    return lastPart;
  };

  useEffect(() => {
    const fetchVacancyDetails = async () => {
      try {
        const idFromSlug = extractIdFromSlug(slug);
        if (!idFromSlug) {
          setError("Invalid vacancy URL");
          return;
        }

        const res = await fetch("http://localhost:5001/api/vacancies");
        const json = await res.json();
        const vacancies = Array.isArray(json.data) ? json.data : [];
        
        const foundVacancy = vacancies.find(v => 
          v._id && v._id.slice(-6) === idFromSlug
        );

        if (!foundVacancy) {
          setError("Vacancy not found");
          return;
        }
        
        setVacancy(foundVacancy);
      } catch (err) {
        setError(err.message || "Error fetching vacancy details");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchVacancyDetails();
    }
  }, [slug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Application submitted:", formData);
    // You can send this data to your backend
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    
    if (diffWeeks > 0) {
      return `Posted ${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`;
    } else if (diffDays > 0) {
      return `Posted ${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else {
      return 'Posted today';
    }
  };

  if (loading) {
    return (
      <div className="vacancy-details-wrapper">
        <div className="loading">Loading vacancy details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="vacancy-details-wrapper">
        <div className="error">
          <p>{error}</p>
          <button onClick={() => navigate("/vacancies")} className="back-button">
            ← Back to Vacancies
          </button>
        </div>
      </div>
    );
  }

  if (!vacancy) {
    return (
      <div className="vacancy-details-wrapper">
        <div className="not-found">
          <p>Vacancy not found</p>
          <button onClick={() => navigate("/vacancies")} className="back-button">
            ← Back to Vacancies
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="vacancy-details-wrapper">
      <div className="vacancy-container">
        {/* Header Section */}
        <header className="vacancy-header">
          <h1 className="vacancy-title">{vacancy.title || "Position Available"}</h1>
          <div className="vacancy-meta-info">
            <span className="posted-date">
              📅 {vacancy.postedAt ? formatDate(vacancy.postedAt) : 'Recently posted'}
            </span>
          </div>
        </header>

        {/* Main Content */}
        <div className="vacancy-content">
          <section className="job-description-section">
            <h2>We're Hiring: {vacancy.title || "Position Available"}</h2>
            <p className="intro-text">
              {vacancy.description || "We are looking for a talented professional to join our team. This is a fantastic opportunity to be part of a growing organization."}
            </p>

            <div className="job-details-grid">
              <div className="detail-item">
                <strong>Location:</strong> {vacancy.location || "Not specified"}
              </div>
              <div className="detail-item">
                <strong>Job Type:</strong> {vacancy.jobType || "Full-time"}
              </div>
              <div className="detail-item">
                <strong>Salary:</strong> {vacancy.salary || "Competitive, based on experience"}
              </div>
            </div>

            {vacancy.requirements && (
              <div className="content-section">
                <h3>About the Role</h3>
                <p>{vacancy.requirements}</p>
              </div>
            )}

            {vacancy.skills && vacancy.skills.length > 0 && (
              <div className="content-section">
                <h3>What We're Looking For</h3>
                <ul>
                  {vacancy.skills.map((skill, index) => (
                    <li key={index}>★ {skill}</li>
                  ))}
                </ul>
              </div>
            )}

            {vacancy.benefits && (
              <div className="content-section">
                <h3>Why Join Our Team</h3>
                <p>{vacancy.benefits}</p>
              </div>
            )}

            <div className="content-section">
              <h3>How to Apply</h3>
              <p>Send your <strong>CV and portfolio</strong> using the form below or contact us directly.</p>
            </div>
          </section>

          {/* Application Form */}
          <section className="application-section">
            <h2>Apply For This Job</h2>
            
            <form onSubmit={handleApplySubmit} className="application-form">
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone*</label>
                <div className="phone-input-wrapper">
                  <select className="country-code">
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+880">🇧🇩 +880</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="form-input phone-number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="coverLetter">Cover Letter*</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="form-textarea"
                  placeholder="Tell us why you're the perfect fit for this role..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="resume">Attach Resume*</label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="file-input"
                  />
                  <span className="file-input-text">
                    {formData.resume ? formData.resume.name : "No file chosen"}
                  </span>
                  <button type="button" className="browse-button">
                    Browse
                  </button>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-button">
                  Submit Application
                </button>
                <button 
                  type="button" 
                  onClick={() => navigate("/vacancies")} 
                  className="back-to-jobs-button"
                >
                  ← Back to Jobs
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VacancyDetails;