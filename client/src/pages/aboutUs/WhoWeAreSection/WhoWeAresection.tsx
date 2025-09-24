// src/components/WhoWeAre.jsx

import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            className="mb-12 lg:mb-0"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Top Label */}
            <div className="flex items-center text-sm font-semibold uppercase tracking-wide text-gray-500">
              <span className="mr-2 h-0.5 w-6 bg-green-500"></span>
              Careerup Ltd
            </div>
            
            {/* Heading */}
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Who <span className="text-blue-500">We Are</span>
            </h2>
            
            {/* Paragraphs */}
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our approach combines thoughtful analysis and heartfelt dedication. We attentively listen to your preferences, understand your requirements, and skillfully align you with a job that suits you perfectly.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We consider everything from your career aspirations and personality to even your commuting needs — our comprehensive approach leaves no stone unturned.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our strategy centers around the recruitment and retention of exceptional individuals. We deeply value each team member as a distinct individual.
            </p>
          </motion.div>

          {/* Right Column - Image with Shapes */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative Purple Half-Circle */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-700 rounded-full sm:w-80 sm:h-80 lg:left-0 lg:-top-16 lg:translate-x-0 lg:w-[400px] lg:h-[400px]"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full max-w-md overflow-hidden rounded-xl shadow-lg lg:max-w-none lg:w-[500px] lg:h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Professional woman shaking hands"
                className="w-full h-full object-cover"
              />
              {/* Pill-shaped curve overlay (bottom-right) */}
              <div className="absolute bottom-0 right-0 h-1/3 w-1/3 bg-white rounded-bl-full transform translate-x-1/2 translate-y-1/2"></div>
            </div>

            {/* Decorative Dotted Pattern */}
            <div className="absolute bottom-0 right-0 z-0 grid h-32 w-32 transform grid-cols-6 grid-rows-6 gap-1 opacity-40 lg:h-40 lg:w-40">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;