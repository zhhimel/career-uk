import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";


const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Carousel />
      <Footer/>
    </div>
  );
};

export default Home;
