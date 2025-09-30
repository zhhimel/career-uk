import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import roundImage from "../../../assets/images/round.png";
import candidateworking from "../../../assets/images/candidate-working.png";
import recruiterworking from "../../../assets/images/recruiter-working.png";

const HomeAbout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let paddingX = 20;
  if (windowWidth >= 768) paddingX = 60;
  if (windowWidth >= 1200) paddingX = 120;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        paddingTop: "80px",
        paddingBottom: "100px",
        paddingLeft: `${paddingX}px`,
        paddingRight: `${paddingX}px`,
      }}
    >
      <div
        className="flex flex-col lg:flex-row items-center"
        style={{
          maxWidth: "1900px",
          margin: "0 auto",
          gap: windowWidth < 768 ? "30px" : "64px",
        }}
      >
        {/* Left Side - Images */}
        <div className="relative w-full lg:w-2/4 flex justify-center mx-auto">
          <div
            className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[450px] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 5px 5px, #0ea5e9 2px, transparent -1px)`,
              backgroundSize: "20px 20px",
            }}
          />
          <div
            className="flex flex-col md:flex-row w-full justify-center z-10"
            style={{ gap: windowWidth < 768 ? "24px" : "40px" }}
          >
            <div className="mt-[50px] md:mt-[75px] w-full md:w-[50%] h-[20rem] sm:h-[25rem] md:h-[30rem] rounded-[220px] overflow-hidden shadow-2xl relative">
              <img
                src={candidateworking}
                alt="Professional woman at desk"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative w-full md:w-[50%] h-[30rem] sm:h-[35rem] md:h-[40rem] rounded-[220px] overflow-hidden shadow-2xl">
              <motion.img
                src={recruiterworking}
                alt="Professional man with laptop"
                className="w-full h-full object-cover object-center"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <img
                src={roundImage}
                alt="Overlapping circle"
                className="absolute w-full pt-[250px] sm:pt-[300px] md:pt-[250px] h-full object-contain z-20"
                style={{bottom: "-8px"}}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-8 mt-8 lg:mt-0"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 md:w-12 h-1 bg-green-500"></div>
            <span
              className="text-sm md:text-base uppercase tracking-wider text-gray-500 font-bold"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              About Us
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Your Trusted Recruitment <span className="text-cyan-500">Partner</span>
          </h1>

          {/* Main Content */}
          <div
            className="space-y-4 md:space-y-6 text-black-500"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
              fontSize: "22px",
            }}
          >
            <p>
              At BreezNest Ltd, our candidate-centric approach allows us to effectively match individuals with the most suitable roles, whether they are seeking temporary or permanent positions. We cover a diverse range of disciplines, ensuring a comprehensive and tailored approach to finding the perfect fit for every candidate.
            </p>

            <p>
              BreezNest Ltd has been shaping futures in the commercial industry for over a decade, providing our clients and candidates with specialize knowledge and expertise. We are dedicated to building successful careers by leveraging our extensive experience and industry insights.
            </p>
          </div>

          {/* Read More Button */}
          <div className="mt-4 flex">
            <a
                href="/about" // Change this to your desired link
                className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-2xl shadow hover:bg-cyan-600 transition"
            >
                Read More
            </a>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeAbout;
