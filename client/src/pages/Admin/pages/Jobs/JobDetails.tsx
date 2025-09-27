import React from "react";
import "./Jobs.css";

interface Props {
  job: {
    id: number;
    title: string;
    location: string;
    type: string;
    posted: string;
  };
}

const JobDetails: React.FC<Props> = ({ job }) => {
  return (
    <div className="job-details">
      <p><strong>Title:</strong> {job.title}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Posted:</strong> {job.posted}</p>
    </div>
  );
};

export default JobDetails;
