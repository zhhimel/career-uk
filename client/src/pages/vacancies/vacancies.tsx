import React from 'react';
import { useEffect } from 'react';
import './vacancies.css'; // Assuming you'll have a CSS file for styling

const Vacancies = () => {
  useEffect(() => {
        document.title = "Vacancies - BreezNext Ltd"; // Set tab title
      }, []);
  return (
    <div className="job-search-container">
      <div className="search-bar">
        <input type="text" placeholder="Keywords" className="keywords-input" />
        <button className="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>

      <div className="job-card">
        <div className="job-icon">
          {/* You might want a different icon or an actual company logo here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-building"
          >
            <rect x="3" y="2" width="18" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="6" x2="12" y2="18"></line>
            <line x1="7" y1="10" x2="7" y2="14"></line>
            <line x1="17" y1="10" x2="17" y2="14"></line>
          </svg>
        </div>
        <div className="job-details">
          <h3 className="job-title">Graphic Designer Wanted – Full-Time, London</h3>
          <p className="job-description">
            We're Hiring: Graphic Designer – Full-Time, London We are looking for a creative and
            detail-oriented Graphic Designer to join our team in London. This is a fantastic
            opportunity to be part of a gr...
          </p>
          <div className="job-actions">
            <button className="quick-apply-button">Quick Apply</button>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
        <div className="job-posted-date">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-calendar"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Posted 2 weeks ago
        </div>
      </div>
    </div>
  );
};

export default Vacancies;