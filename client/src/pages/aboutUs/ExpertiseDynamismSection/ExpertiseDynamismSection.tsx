import React from 'react';
import { motion } from 'framer-motion';

const DetailsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Left Column - Image with Decorative Elements */}
          <div className="md:w-1/2 relative">
            {/* Purple quarter-circle behind image (top-left) */}
            <div className="absolute -top-16 -left-16 w-96 h-96 bg-purple-700 rounded-tl-full rounded-br-full z-0"></div>
            
            {/* Main Image with rounded corners and bottom-right pill-shape */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Professional woman shaking hands" 
                className="w-full h-80 md:h-96 object-cover"
              />
              
              {/* White pill-shaped curve on bottom-right corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white rounded-br-full z-10"></div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-6"
          >
            {/* Label with green underline */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-0.5 bg-green-500"></div>
              <span className="text-sm font-semibold uppercase text-gray-600">DETAILS</span>
            </div>

            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-bold leading-tight text-gray-800">
              The fusion of our experienced expertise and youthful dynamism allows us to challenge conventional thinking, ensuring we stay innovative and ahead of the curve
            </h2>

            {/* Paragraphs with bullet points */}
            <div className="space-y-4 text-gray-700">
              <p>• We understand the importance of maintaining a healthy work-life balance, and we strongly believe in tailoring your job to suit your needs.</p>
              <p>• Join our team and leverage our strong presence in the life science sector, working with leading clients. You’ll have the chance to contribute to our existing client base, enabling you to make an immediate impact and excel in your role.</p>
              <p>• Join us in our expansion phase and help us take our organization to new heights. As a valuable member of our team, you will have the opportunity to play a key role in our journey, champion our organization, and contribute to its growth.</p>
              <p>Together, we can redefine industry standards and achieve remarkable success.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;