import React from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import ContactUsHero from "./components/ContactUsHero";
import ContactUsMain from "./components/ContactUsMain";


const Clients: React.FC = () => {
  useEffect(() => {
        document.title = "Contact Us - BreezNest Ltd"; // Set tab title
      }, []);
  return (
    <div className="contact-us-page">
      <ContactUsHero/>
      <ContactUsMain/>
      <Footer/>
    </div>
  );
};

export default Clients;
