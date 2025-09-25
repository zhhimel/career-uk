import React, { useEffect, useState, useRef } from 'react';
import whowearemeeting from '../../../assets/images/whoWeAre.png';

const WhoWeAreSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after animation triggers once
        }
      },
      { threshold: 0.3 } // 30% of section visible to trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-white pt-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side - Content */}
        <div 
          className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-1 bg-green-500"></div>
            <span
              className="text-lg uppercase tracking-wider text-gray-500 font-bold"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              Careerup Ltd
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-8"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            Who <span className="text-cyan-500">We Are</span>
          </h1>

          {/* Main Content */}
          <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: '1.25rem' }}>
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
          className={`relative w-full lg:w-1/2 flex justify-center transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          {/* Dot Background */}
          <div
        className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[450px] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 5px 5px, #0ea5e9 2px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}
      />

          {/* Main Image */}
          <div className="relative w-full max-w-xl overflow-visible">
            <img
              src={whowearemeeting}
              alt="Professional woman discussing with colleagues"
              className="w-full h-auto object-cover relative z-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
