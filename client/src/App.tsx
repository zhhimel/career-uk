import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Candidates from "./pages/Candidates/Candidates";
import Clients from "./pages/Clients/Clients";
import AboutUsPage from './pages/aboutUs/aboutUs';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
};


export default App;
