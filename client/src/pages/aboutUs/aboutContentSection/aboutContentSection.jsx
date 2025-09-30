import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import roundImage from "../../../assets/images/round.png";
import candidateworking from "../../../assets/images/candidate-working.png";
import recruiterworking from "../../../assets/images/recruiter-working.png";

const AboutSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Responsive paddings
  let paddingX = 20; // default mobile
  if (windowWidth >= 768) paddingX = 60; // tablet
  if (windowWidth >= 1200) paddingX = 120; // desktop

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
          gap: windowWidth < 768 ? "30px" : "64px", // responsive gap
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
                className="absolute w-full pt-[250px] sm:pt-[300px] md:pt-[250px] h-full bottom-0 object-contain z-20"
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
            About <span className="text-cyan-500">BreezNest Ltd</span>
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
              Our approach combines thoughtful analysis and heartfelt dedication.
              We attentively listen to your preferences, understand your
              requirements, and skillfully align you with a job that suits you
              perfectly. We consider everything from your career aspirations and
              personality to even your commuting needs – our comprehensive
              approach leaves no stone unturned.
            </p>

            <p>
              BreezNest Ltd is proud to hold the Gangmasters and Labour Abuse
              Authority (GLAA) license, which reflects our commitment to
              ensuring fair and ethical practices within the recruitment
              industry. The GLAA is responsible for regulating and monitoring
              labour exploitation within industries such as food processing. By
              holding this license, BreezNest Ltd guarantees that all workers
              are provided with safe, ethical working conditions, fair pay, and
              appropriate support. This license also ensures that we comply with
              strict standards to prevent the exploitation of vulnerable workers,
              offering them the security and protection they deserve.
            </p>
          </div>

          {/* Feature Points */}
          <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-7 md:w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 19c0 1.105-1.105 2-2.5 2S4 20.105 4 19M16.5 12H18M16.5 12C16.5 10.895 17.395 10 18.5 10s1.5.895 1.5 2M16.5 12v6a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 00-2-2H18.5a2 2 0 00-1.5 2z"
                  />
                </svg>
              </div>
              <p
                className="text-base md:text-xl"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: "450" }}
              >
                We provide unwavering support throughout your career journey,
                ensuring that we are always within reach whenever you require
                assistance. Whether it's guidance, advice, or any other form of
                support, we are just a phone call away.
              </p>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-7 md:w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-1a3 3 0 005.356-2.356L21 12a4.978 4.978 0 00-5-5h-2M9 7h6m0 10v-1a3 3 0 00-5.356-2.356L3 12a4.978 4.978 0 005 5h2"
                  />
                </svg>
              </div>
              <p
                className="text-base md:text-xl"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: "450" }}
              >
                With every candidate's job search, we leverage our extensive
                experience to provide valuable expertise and guidance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
