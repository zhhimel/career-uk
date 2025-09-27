import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    
    if (!token) {
      console.log("No token found");
      setLoading(false);
      return;
    }
    axios
      .get("http://localhost:5001/api/auth/admin/verify", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setIsValid(true))
      .catch(() => setIsValid(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Checking authentication...</p>;
  return isValid ? children : <Navigate to="/admin/auth" replace />;
}
