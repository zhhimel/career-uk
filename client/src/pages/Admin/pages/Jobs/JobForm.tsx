import React, { useState } from "react";
import "./Jobs.css";

interface Props {
  onSave: () => void;
}

const JobForm: React.FC<Props> = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [posted, setPosted] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally you’d call API here
    alert(`Job Added: ${title}`);
    onSave();
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <label>
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Location
        <input value={location} onChange={(e) => setLocation(e.target.value)} required />
      </label>
      <label>
        Type
        <input value={type} onChange={(e) => setType(e.target.value)} required />
      </label>
      <label>
        Posted
        <input value={posted} onChange={(e) => setPosted(e.target.value)} required />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default JobForm;
