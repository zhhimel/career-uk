import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/images/bg-about.jpg';

const MissionVisionSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive padding
  let paddingX = 20; // mobile
  if (windowWidth >= 768) paddingX = 60; // tablet
  if (windowWidth >= 1200) paddingX = 120; // desktop

  // Gap between columns
  const gap = windowWidth < 1024 ? 30 : 48;

  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '170px',
        paddingBottom: '170px',
        paddingLeft: `${paddingX}px`,
        paddingRight: `${paddingX}px`,
        color: 'white',
      }}
    >
      {/* Overlay for readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1900px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: windowWidth < 1024 ? 'column' : 'row',
          alignItems: 'center',
          gap: `${gap}px`,
        }}
      >
        {/* Left Column - Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{
            width: windowWidth < 1024 ? '100%' : '50%',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >
          {/* Top Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.975rem', fontWeight: 500, textTransform: 'uppercase' ,letterSpacing:'3px'}}>
            <span style={{ width: '24px', height: '2px', backgroundColor: '#10b981', display: 'inline-block' }}></span>
            BreezNext Ltd
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: windowWidth < 768 ? '2rem' : windowWidth < 1200 ? '2.5rem' : '3.2rem',
              fontWeight: 600,
              marginTop: '16px',
              lineHeight: '1.2',
              fontFamily: 'Times New Roman, serif',
            }}
          >
            Who We Are
          </h2>

          {/* Paragraph */}
          <p
            style={{
              fontSize: windowWidth < 768 ? '1.2rem' : '1.45rem',
              lineHeight: '1.8',
              color: '#e0f2fe',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
            }}
          >
            BreezNext Ltd is a prominent recruitment agency, renowned for its expertise in the field. Whether your business requires assistance with temporary or permanent positions, we are well-equipped to lend a helping hand. Our client-centric approach ensures that we not only provide high-caliber candidates but also offer valuable insights to enhance your business.
          </p>
        </motion.div>

        {/* Right Column - Mission & Vision Cards */}
        <div
          style={{
            width: windowWidth < 1024 ? '100%' : '50%',
            display: 'flex',
            flexDirection: 'column',
            gap: '44px',
            marginLeft:'35px',
          }}
        >
          {/* Mission Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              color: '#1f2937',
              padding: '26px',
              width:'90%',
              borderRadius: '9999px',
              boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
              
            }}
          >
            <div
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100px',
                width: '100px',
                borderRadius: '50%',
                backgroundColor: '#f3f4f6',
                marginRight: '16px',
                
              }}
            >
              {/* Diamond Icon */}
             <svg
              className="text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              height="60px"       // increased from 32px
              width="60px"        // increased from 32px
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16v4m-2-2h4m-5 18h4m-2-2v4M19 3v4m-2-2h4m-5 18h4m-2-2v4M5 12h14" />
            </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>Mission</h3>
              <p style={{ marginTop: '8px', fontSize: '1.4rem', fontWeight: 500, lineHeight: '1.6' }}>
                To connect exceptional talent with forward-thinking organizations, enabling innovation, growth, and success across industries.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'linear-gradient(to right, #3b82f6, #10b981)',
              color: 'white',
              padding: '26px',
              width:'90%',
              borderRadius: '9999px',
              boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
            }}
          >
            <div
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100px',
                width: '100px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                marginRight: '16px',
              }}
            >
              {/* Gears Icon */}
             <svg
                className="text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                height="60px"
                width="60px"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.527.288 1.137.472 1.716.524m-9.043 1.34L7.846 17m4.006-7.006l-4.148 4.148" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>Vision</h3>
              <p style={{ marginTop: '8px', fontSize: '1.4rem', fontWeight: 500, lineHeight: '1.6' }}>
                To be the leading bridge between top talent and visionary employers, transforming workplaces and shaping a thriving future for businesses and professionals alike.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
