import React, { useState, useEffect } from "react";
import { FaUsers } from "react-icons/fa";
const API_URL = "http://localhost:5001/api/applications"; // ✅ Your backend endpoint

const ApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingApp, setEditingApp] = useState(null);
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

  const token = localStorage.getItem("adminToken");

  // ✅ Fetch all job applications
  const fetchApplications = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL, {
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();

      // Some APIs return {applications:[...]}, some return [...]
      const list = Array.isArray(data)
        ? data
        : Array.isArray(data.applications)
          ? data.applications
          : Array.isArray(data.data)
            ? data.data
            : [];

      setApplications(list);
    } catch (err) {
      console.error("Failed to fetch applications:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // ✅ Add / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingApp ? "PUT" : "POST";
    const url = editingApp ? `${API_URL}/${editingApp._id}` : API_URL;

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || `Request failed with ${res.status}`);
      }

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
      setEditingApp(null);
      fetchApplications();
    } catch (err) {
      console.error("Failed to save application:", err);
    }
  };

  // ✅ Edit
  const handleEdit = (app) => {
    setEditingApp(app);
    setFormData({
      fullName: app.fullName,
      email: app.email,
      phone: app.phone,
      location: app.location,
      preferredRole: app.preferredRole,
      industry: app.industry,
      availability: app.availability,
      experience: app.experience,
      qualifications: app.qualifications,
      preferredLocations: app.preferredLocations,
      heardAboutUs: app.heardAboutUs,
    });
  };

  // ✅ Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this application?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      if (!res.ok) throw new Error(`Delete failed with ${res.status}`);
      fetchApplications();
    } catch (err) {
      console.error("Failed to delete application:", err);
    }
  };

  const styles = {
    container: { padding: "20px" },
    form: {
      display: "grid",
      gap: "10px",
      maxWidth: "500px",
      marginBottom: "20px",
      background: "#f7f7f7",
      padding: "15px",
      borderRadius: "6px",
    },
    input: { padding: "6px", border: "1px solid #ccc", borderRadius: "4px" },
    table: { width: "100%", borderCollapse: "collapse", marginTop: "20px" },
    thtd: {
      border: "1px solid #ccc",
      padding: "8px",
      textAlign: "left",
      fontSize: "13px",
    },
    btn: {
      padding: "6px 10px",
      marginRight: "6px",
      cursor: "pointer",
      border: "none",
      borderRadius: "4px",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Job Applications</h2>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Job Applications</h1>
        <div className="flex items-center gap-2 bg-white shadow px-4 py-2 rounded-lg">
          <FaUsers className="text-blue-600 text-xl" />
          <span className="text-lg font-semibold">Applicants: {applications.length}</span>
        </div>
      </div>
      {/* Add / Edit Form */}
      <form style={styles.form} onSubmit={handleSubmit}>
        <h3>{editingApp ? "Edit Application" : "Add Application"}</h3>
        {[
          "fullName",
          "email",
          "phone",
          "location",
          "preferredRole",
          "industry",
          "availability",
          "experience",
          "qualifications",
          "preferredLocations",
          "heardAboutUs",
        ].map((field) => (
          <input
            key={field}
            style={styles.input}
            type="text"
            placeholder={field
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (s) => s.toUpperCase())}
            value={formData[field]}
            onChange={(e) =>
              setFormData({ ...formData, [field]: e.target.value })
            }
            required
          />
        ))}
        <button style={{ ...styles.btn, background: "#3498db", color: "#fff" }}>
          {editingApp ? "Update" : "Add"}
        </button>
      </form>

      {/* Applications Table */}
      {loading ? (
        <p>Loading applications...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              {[
                "Full Name",
                "Email",
                "Phone",
                "Role",
                "Industry",
                "Experience",
                "Qualifications",
                "Submitted At",
                "Actions",
              ].map((h) => (
                <th key={h} style={styles.thtd}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {applications.map((a) => (
              <tr key={a._id}>
                <td style={styles.thtd}>{a.fullName}</td>
                <td style={styles.thtd}>{a.email}</td>
                <td style={styles.thtd}>{a.phone}</td>
                <td style={styles.thtd}>{a.preferredRole}</td>
                <td style={styles.thtd}>{a.industry}</td>
                <td style={styles.thtd}>{a.experience}</td>
                <td style={styles.thtd}>{a.qualifications}</td>
                <td style={styles.thtd}>
                  {a.submittedAt
                    ? new Date(a.submittedAt).toLocaleString()
                    : "-"}
                </td>
                <td style={styles.thtd}>
                  <button
                    style={{ ...styles.btn, background: "#2ecc71", color: "#fff" }}
                    onClick={() => handleEdit(a)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ ...styles.btn, background: "#e74c3c", color: "#fff" }}
                    onClick={() => handleDelete(a._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {applications.length === 0 && (
              <tr>
                <td style={styles.thtd} colSpan="9">
                  No applications found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApplicationsPage;
