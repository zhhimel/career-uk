import React, { useEffect, useState, useRef } from 'react';
import handshake from '../../../assets/images/handshake.png';
import { AlignJustify } from 'lucide-react';

const DetailsSection = () => {
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
          observer.disconnect(); // Stop observing after first trigger
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

  // Responsive paddings
  let paddingX = 20; // mobile
  if (windowWidth >= 768) paddingX = 60; // tablet
  if (windowWidth >= 1200) paddingX = 120; // desktop

  // Responsive gap
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
        className="flex flex-col lg:flex-row items-center"
        style={{
          maxWidth: '1900px',
          margin: '0 auto',
          gap: `${gap}px`,
        }}
      >
        {/* Left Side - Image */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center transition-all duration-1000 ease-out"
          style={{
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100%) scale(0.9)',
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="relative w-full max-w-3xl overflow-visible z-10">
            <img
              src={handshake}
              alt="Professional woman shaking hands"
              className="w-full h-auto object-cover rounded-[50px]"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div
          className="w-full lg:w-1/2 space-y-8 transition-all duration-1000 ease-out"
          style={{
            transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-100%) scale(0.9)',
            opacity: isVisible ? 1 : 0,
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-1 bg-green-500"></div>
            <span
              style={{
                fontFamily: 'Times New Roman, serif',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: 'bold',
                color: '#6b7280',
              }}
            >
              Details
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'Times New Roman, serif',
              fontWeight: '800',
              fontSize: windowWidth < 768 ? '24px' : '32px',
              color: '#1f2937',
              marginBottom: '24px',
            }}
          >
            The fusion of our experienced expertise and youthful dynamism allows us to challenge conventional thinking, ensuring we stay innovative and ahead of the curve
          </h2>

          {/* Bullet Points */}
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
            <p>• We understand the importance of maintaining a healthy work-life balance, and we strongly believe in tailoring your job to suit your needs.</p>
            <p>• Join our team and leverage our strong presence in the life science sector, working with leading clients. You’ll have the chance to contribute to our existing client base, enabling you to make an immediate impact and excel in your role.</p>
            <p>• Join us in our expansion phase and help us take our organization to new heights. As a valuable member of our team, you will have the opportunity to play a key role in our journey, champion our organization, and contribute to its growth.</p>
            <p>Together, we can redefine industry standards and achieve remarkable success.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
