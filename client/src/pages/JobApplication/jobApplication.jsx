import React, { useState } from "react";
import { useEffect } from "react";
import "./JobApplicationForm.css";
import axios from "axios";
export default function JobApplicationForm() {
 
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        preferredRole: "",
        industry: "",
        availability: "",
        experience: "",
        qualifications: "",
        preferredLocations: "",
        heardAboutUs: "",
    });     
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

  

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5001/api/applications",
                formData
            );

            console.log("Server response:", response.data);
            alert("Application submitted successfully!");
            // Optionally reset the form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                location: "",
                preferredRole: "",
                industry: "",
                availability: "",
                experience: "",
                qualifications: "",
                preferredLocations: "",
                heardAboutUs: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error.response || error);
            alert("Failed to submit application. Please try again.");
        }
    };

     useEffect(() => {
        document.title = "Job Application Form - BreezNext Ltd"; // Set tab title
    }, []);

    return (
        <div className="job-form-container">
            <h2>Job Application Form</h2>
            <p>
                Ready to take the next step in your career? Fill out the form below to
                apply for opportunities with Careerup Ltd.
            </p>
            <form onSubmit={handleSubmit} className="job-form">
                <label>
                    Full Name
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Email Address
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Phone Number
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Current Location
                    <input
                        type="text"
                        name="location"
                        placeholder="City, Region"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Preferred Job Title/Role
                    <input
                        type="text"
                        name="preferredRole"
                        value={formData.preferredRole}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Industry
                    <select name="industry" value={formData.industry} onChange={handleChange}>
                        <option value="">Select Industry</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                <label>
                    Availability
                    <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                    >
                        <option value="">Select Availability</option>
                        <option value="Immediate">Immediate</option>
                        <option value="1 Month">1 Month</option>
                        <option value="3 Months">3 Months</option>
                    </select>
                </label>

                <label>
                    Work Experience
                    <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="Briefly describe your previous experience and skills relevant to the job"
                    />
                </label>

                <label>
                    Qualifications
                    <textarea
                        name="qualifications"
                        value={formData.qualifications}
                        onChange={handleChange}
                        placeholder="Enter your relevant qualifications or certifications"
                    />
                </label>

                <label>
                    Preferred Location(s)
                    <input
                        type="text"
                        name="preferredLocations"
                        value={formData.preferredLocations}
                        onChange={handleChange}
                        placeholder="Enter preferred locations for your job search"
                    />
                </label>

                <label>
                    How did you hear about us?
                    <select name="heardAboutUs" value={formData.heardAboutUs} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Friend/heardAboutUs">Friend/heardAboutUs</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
