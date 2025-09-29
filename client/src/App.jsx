import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./PrivateRoute";

import Home from "./pages/Home/Home";
import Candidates from "./pages/Candidates/Candidates";
import Clients from "./pages/Clients/Clients";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUsPage from "./pages/aboutUs/aboutUs";
import Vacancies from "./pages/vacancies/vacancies";



import ApplicationList from "./pages/Admin/pages/Applications/ApplicationList";
import Login from "./pages/Admin/pages/Login/Login";
import Dashboard from "./pages/Admin/pages/Dashboard/Dashboard";
import RecruitmentForm from "./pages/RecruitmentForm/RecruitmentForm";
import JobApplicationForm from "./pages/JobApplication/jobApplication";
import VacancyDetails from "./pages/vacancies/vacancyDetails";

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages with Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/vacancies/:slug" element={<VacancyDetails />} />
          <Route path="/recruitment-inquiry-form" element={<RecruitmentForm />} />
          <Route path="/job-application" element={<JobApplicationForm />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin/auth" element={<Login />} />
        <Route path="/admin/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        {/* 404 */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}
