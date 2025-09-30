import React, { useEffect, useState, useRef } from 'react';
import whowearemeeting from '../../../assets/images/whoWeAre.png';

const WhoWeAreSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  // Responsive padding
  let paddingX = 20; // mobile
  if (windowWidth >= 768) paddingX = 60; // tablet
  if (windowWidth >= 1200) paddingX = 120; // desktop

  // Gap between content and image
  const gap = windowWidth < 768 ? 30 : 64;

  return (
    <div
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        backgroundColor: 'white',
        paddingTop: '80px',
        paddingBottom: '100px',
        paddingLeft: `${paddingX}px`,
        paddingRight: `${paddingX}px`,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: windowWidth < 1024 ? 'column' : 'row',
          alignItems: 'center',
          gap: `${gap}px`,
          maxWidth: '1900px',
          margin: '0 auto',
        }}
      >
        {/* Left Side - Content */}
        <div
          style={{
            width: windowWidth < 1024 ? '100%' : '50%',
            transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2px' }}>
            <div style={{ width: '56px', height: '4px', backgroundColor: '#10b981' }}></div>
            <span
              style={{
                fontFamily: 'Times New Roman, serif',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                fontWeight: 'bold',
                color: '#6b7280',
              }}
            >
              BreezNest Ltd
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'Times New Roman, serif',
              fontWeight: '800',
              fontSize: windowWidth < 768 ? '2.3rem' : windowWidth < 1200 ? '2.7rem' : '3.3rem',
              color: '#1f2937',
              marginBottom: '2px',
            }}
          >
            Who <span style={{ color: '#06b6d4' }}>We Are</span>
          </h1>

          {/* Main Content */}
          <div
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              fontSize: windowWidth < 768 ? '1.2rem' : '1.45rem',
              color: '#374151',
              lineHeight: '1.8',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <p>
              Our approach combines thoughtful analysis and heartfelt dedication. We attentively listen to your preferences, understand your requirements, and skillfully align you with a job that suits you perfectly.
            </p>
            <p>
              We consider everything from your career aspirations and personality to even your commuting needs – our comprehensive approach leaves no stone unturned.
            </p>
            <p>
              Our strategy centers around the recruitment and retention of exceptional individuals. We deeply value each team member as a distinct individual.
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div
          style={{
            width: windowWidth < 1024 ? '100%' : '50%',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out',
          }}
        >
          {/* Dot Background */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: windowWidth < 768 ? '200px' : '500px',
              height: windowWidth < 768 ? '200px' : '450px',
              pointerEvents: 'none',
              backgroundImage: 'radial-gradient(circle at 5px 5px, #0ea5e9 2px, transparent 0)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Main Image */}
          <div style={{ width: '100%', maxWidth: '700px', position: 'relative', zIndex: 10 }}>
            <img
              src={whowearemeeting}
              alt="Professional woman discussing with colleagues"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '50px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
