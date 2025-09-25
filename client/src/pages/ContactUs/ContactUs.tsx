import React from "react";
import Footer from "../../components/Footer/Footer";
import ContactUsHero from "./components/ContactUsHero";
import ContactUsMain from "./components/ContactUsMain";


const Clients: React.FC = () => {
  return (
    <div className="contact-us-page">
      <ContactUsHero/>
      <ContactUsMain/>
      <Footer/>
    </div>
  );
};

export default Clients;
