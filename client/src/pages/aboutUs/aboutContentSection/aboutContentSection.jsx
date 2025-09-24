import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const rightImageRef = useRef(null);
  const textColumnRef = useRef(null);

  useEffect(() => {
    // Animate the right image from bottom to top on load
    if (rightImageRef.current) {
      setTimeout(() => {
        rightImageRef.current.style.transform = 'translateY(0)';
        rightImageRef.current.style.opacity = '1';
      }, 300);
    }
    
    // Animate the text column from right to left on load (since it's on the right side in desktop view)
    if (textColumnRef.current) {
      setTimeout(() => {
        textColumnRef.current.style.transform = 'translateX(0)';
        textColumnRef.current.style.opacity = '1';
      }, 100);
    }
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        {/* Main two-column layout */}
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center md:items-start">
          {/* Left Column - Images */}
          <div className="md:order-1 w-full md:w-1/2 flex justify-center md:justify-start">
            {/* Dotted grid pattern background */}
            <div className="absolute inset-0 z-0">
              <style jsx>{`
                .dotted-grid {
                  background-image: 
                    radial-gradient(circle, #10b981 2px, transparent 2px);
                  background-size: 20px 20px;
                  background-position: 0 0;
                }
              `}</style>
              <div className="w-full h-full bg-white dotted-grid opacity-30"></div>
            </div>

            {/* Two pill-shaped images */}
            <div className="flex flex-col md:flex-row gap-6 relative z-10">
              {/* Woman image - smaller and more oval */}
              <div className="w-56 h-80 rounded-[7rem] overflow-hidden shadow-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Professional woman working" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Man image with overlapping circles and animation */}
              <div 
                ref={rightImageRef}
                className="w-64 h-96 rounded-[7rem] overflow-hidden shadow-lg relative transition-all duration-1000 ease-out transform translate-y-10 opacity-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Professional man working" 
                  className="w-full h-full object-cover"
                />
                
                {/* Large green/blue circle aligned with right image's bottom - same diameter as image width */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 opacity-30"></div>
                
                {/* Additional smaller circle for layered effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-56 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 opacity-20"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div 
            ref={textColumnRef}
            className="md:order-2 w-full md:w-1/2 space-y-6 transition-all duration-1000 ease-out transform translate-x-10 opacity-0"
          >
            {/* Label with divider */}
            <div className="flex items-center justify-end md:justify-start">
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-600 bg-white px-2 relative z-10">
                ABOUT US
              </span>
              <div className="flex-grow h-0.5 bg-emerald-500 ml-4"></div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              About <span className="text-blue-500">Careerup Ltd</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-gray-700">
              <p>
                Our approach combines thoughtful analysis and heartfelt dedication. We attentively listen to your preferences, understand your requirements, and skillfully align you with a job that suits you perfectly. We consider everything from your career aspirations and personality to even your commuting needs – our comprehensive approach leaves no stone unturned.
              </p>
              <p>
                Careerup Ltd is proud to hold the Gangmasters and Labour Abuse Authority (GLAA) license, which reflects our commitment to ensuring fair and ethical practices within the recruitment industry. The GLAA is responsible for regulating and monitoring labour exploitation within industries such as food processing. By holding this license, Careerup Ltd guarantees that all workers are provided with safe, ethical working conditions, fair pay, and appropriate support. This license also ensures that we comply with strict standards to prevent the exploitation of vulnerable workers, offering them the security and protection they deserve.
              </p>
            </div>

            {/* Feature Rows */}
            <div className="space-y-8 pt-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <img 
                    src="https://careerup.uk/wp-content/uploads/2024/12/icon-1.png  " 
                    alt="Support icon" 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700">
                    We provide unwavering support throughout your career journey, ensuring that we are always within reach whenever you require assistance. Whether it's guidance, advice, or any other form of support, we are just a phone call away.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <img 
                    src="https://careerup.uk/wp-content/uploads/2024/12/icon-5-1.png  " 
                    alt="Experience icon" 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700">
                    With every candidate's job search, we leverage our extensive experience to provide valuable expertise and guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;