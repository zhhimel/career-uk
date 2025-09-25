import React, { useEffect, useState, useRef } from 'react';
import handshake from '../../../assets/images/handshake.png';

const DetailsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side - Image */}
        <div 
          className={`relative w-full lg:w-1/2 flex justify-center transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-full opacity-0 scale-90'
          }`}
        >
          {/* Main Image */}
          <div className="relative w-full max-w-lg overflow-visible z-10">
            <img
              src={handshake}
              alt="Professional woman shaking hands"
              className="w-full h-auto object-cover rounded-[50px]"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div 
          className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-full opacity-0 scale-90'
          }`}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-1 bg-green-500"></div>
            <span
              className="text-lg uppercase tracking-wider text-gray-500 font-bold"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              Details
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            The fusion of our experienced expertise and youthful dynamism allows us to challenge conventional thinking, ensuring we stay innovative and ahead of the curve
          </h2>

          {/* Bullet Points */}
          <div className="space-y-5 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: '1.25rem' }}>
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
