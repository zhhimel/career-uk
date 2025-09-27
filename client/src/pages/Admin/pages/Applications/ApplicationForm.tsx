import React, { useState } from "react";
import "./Application.css";

interface Props {
    onSave: () => void;
}

const ApplicationForm: React.FC<Props> = ({ onSave }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("");
    const [applied, setApplied] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Normally you'd call your backend API to save this data
        alert(`Application added for ${name}`);
        onSave();
    };

    return (
        <form className="application-form" onSubmit={handleSubmit}>
            <label>
                Full Name
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter applicant name"
                />
            </label>

            <label>
                Email
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="Enter applicant email"
                />
            </label>

            <label>
                Preferred Role
                <input
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    placeholder="Job role applied for"
                />
            </label>

            <label>
                Status
                <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="">Select Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Interviewed">Interviewed</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </label>

            <label>
                Applied Date
                <input
                    value={applied}
                    onChange={(e) => setApplied(e.target.value)}
                    placeholder="e.g. 20 Sep 2025"
                    required
                />
            </label>

            <button type="submit">Save Application</button>
        </form>
    );
};

export default ApplicationForm;

