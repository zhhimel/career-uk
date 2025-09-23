import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Candidates from "./pages/Candidates/Candidates";
import Clients from "./pages/Clients/Clients";


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </Router>
  );
};


export default App;
