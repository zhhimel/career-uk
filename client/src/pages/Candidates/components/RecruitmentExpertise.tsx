import React from 'react';
import './RecruitmentExpertise.css';

// Import images from assets folder
import warehouseImg from "../../../assets/images/candidates/warehouse.jpg";
import hotelImg from "../../../assets/images/candidates/hotel-restaurant.jpg";
import manufacturingImg from "../../../assets/images/candidates/manufacturing.jpg";
import foodProductionImg from "../../../assets/images/candidates/food--production.jpg";
import retailImg from "../../../assets/images/candidates/retail.webp";
import cleanerImg from "../../../assets/images/candidates/cleaner.jpg";
import securityImg from "../../../assets/images/candidates/security-guard.jpg";
import constructionImg from "../../../assets/images/candidates/construction.jpg";

const RecruitmentExpertise = () => {
  const expertiseAreas = [
    {
      id: 1,
      title: "Ware House",
      image: warehouseImg
    },
    {
      id: 2,
      title: "Hotel & Restaurant",
      image: hotelImg
    },
    {
      id: 3,
      title: "Manufacturing",
      image: manufacturingImg
    },
    {
      id: 4,
      title: "Food Production",
      image: foodProductionImg
    },
    {
      id: 5,
      title: "Retail",
      image: retailImg
    },
    {
      id: 6,
      title: "Cleaner",
      image: cleanerImg
    },
    {
      id: 7,
      title: "Security Guard",
      image: securityImg
    },
    {
      id: 8,
      title: "Construction",
      image: constructionImg
    }
  ];

  return (
    <div className="recruitment-expertise">
      <div className="container">
        <div className="header-section">
          <h1 className="main-title">Areas of Expertise in Recruitment</h1>
          <p className="subtitle">
            Our expertise lies in providing recruitment solutions for Permanent and Temporary Positions within
            United Kingdom. We cater to a wide range of disciplines, including:
          </p>
        </div>
        
        <div className="expertise-grid">
          {expertiseAreas.map((area) => (
            <div key={area.id} className="expertise-card">
              <div className="card-image">
                <img src={area.image} alt={area.title} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{area.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentExpertise;