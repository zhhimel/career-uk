import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/images/bg-about.jpg';

const MissionVisionSection = () => {
  return (
    <section 
      className="relative bg-cover bg-center py-16 sm:py-24 lg:py-32"
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      {/* Overlay to ensure text readability if the background image is complex */}
      {/* Changed opacity to a subtle level for better text contrast against the background image */}
      <div className="absolute inset-0 bg-white-600 bg-opacity-10"></div> 

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            className="mb-12 lg:mb-0 text-white"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Top Label */}
            <div className="flex items-center text-sm font-semibold uppercase tracking-wide">
              <span className="mr-2 h-0.5 w-6 bg-green-400"></span>
              Careerup Ltd
            </div>
            
            {/* Heading */}
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Who <span className="text-blue-300">We Are</span>
            </h2>
            
            {/* Paragraph */}
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Careerup Ltd is a prominent recruitment agency, renowned for its expertise in the field. Whether your business requires assistance with temporary or permanent positions, we are well-equipped to lend a helping hand. Our client-centric approach ensures that we not only provide high-caliber candidates but also offer valuable insights to enhance your business.
            </p>
          </motion.div>

          {/* Right Column - Mission and Vision Cards */}
          <div className="space-y-8">
            {/* Mission Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start bg-white p-6 rounded-full shadow-lg" // Adjusted rounded-full to match image, if 'rounded-2xl' is desired, change here
            >
              <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 mr-4">
                {/* Diamond Icon Placeholder */}
                <svg className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16v4m-2-2h4m-5 18h4m-2-2v4M19 3v4m-2-2h4m-5 18h4m-2-2v4M5 12h14" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Mission</h3>
                <p className="mt-2 text-base text-gray-600">
                  To connect exceptional talent with forward-thinking organizations, enabling innovation, growth, and success across industries.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }} // Animate from right to left
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-full shadow-lg text-white" // Adjusted rounded-full to match image
            >
              <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-white bg-opacity-20 mr-4">
                {/* Gears Icon Placeholder */}
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.527.288 1.137.472 1.716.524m-9.043 1.34L7.846 17m4.006-7.006l-4.148 4.148" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Vision</h3>
                <p className="mt-2 text-base">
                  To be the leading bridge between top talent and visionary employers, transforming workplaces and shaping a thriving future for businesses and professionals alike.
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;