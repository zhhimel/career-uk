import React from "react";
import "./Application.css";

interface Props {
  application: {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    applied: string;
  };
}

const ApplicationDetails: React.FC<Props> = ({ application }) => {
  return (
    <div className="application-details">
      <p><strong>Name:</strong> {application.name}</p>
      <p><strong>Email:</strong> {application.email}</p>
      <p><strong>Role:</strong> {application.role}</p>
      <p><strong>Status:</strong> {application.status}</p>
      <p><strong>Applied:</strong> {application.applied}</p>
    </div>
  );
};

export default ApplicationDetails;
