import React, { useState, useEffect } from 'react';
import './Carousel.css';

// Import images from assets folder
import image1 from '../../assets/images/caro1.png';
import image2 from '../../assets/images/caro2.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  // Images from assets folder
   const images = [
    {
      src: image1,
      alt: "Team collaboration"
    },
    {
      src: image2,
      alt: "Professional success"
    }
  ];

  // Static content that remains the same for all images
  const carouselContent = {
    title: "Unlock Limitless",
    titleHighlight: "Career Opportunities", 
    description: "Whether you're a job seeker aiming for your next big move or an employer looking for top-tier talent, we are here to connect ambitions with possibilities. Let us guide you toward a future of success and fulfillment."
  };

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    // Trigger animation once after component mounts
    setAnimateText(true);
  }, []);

  return (
       <div className="carousel-container">
        {/* Carousel Images */}
        <div className="carousel-images">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : 'inactive'}`}
            >
              <div
                className={`carousel-image ${index === currentIndex ? 'zoom' : ''}`}
                style={{
                  backgroundImage: `url(${image.src})`
                }}
                role="img"
                aria-label={image.alt}
              />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="carousel-content">
          <div className="content-wrapper">
           <div className={`carousel-text ${animateText ? 'slide-in-left' : ''}`}>
                <h1 className="carousel-title">
                    <span className="title-main">Unlock Limitless</span>
                    <span className="title-sub">
                        <span className="career">Career</span>
                        &nbsp;
                        <span className="opportunities">Opportunities</span>
                    </span>
                </h1>

                <p className="carousel-description">
                    {carouselContent.description}
                </p>
                <div className="carousel-buttons">
                    <a href="/about" className="btn btn-primary">Read More</a>
                    <a href="contact-us" className="btn btn-secondary">Contact Us</a>
                </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="carousel-overlay" />
    </div>
  );
};

export default Carousel;