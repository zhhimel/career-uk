import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:5001/api/vacancies"; // ✅ Update if needed

const VacancyPage = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingVacancy, setEditingVacancy] = useState(null); // vacancy being edited
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    employmentType: "",
    industry: "",
    closingDate: "",
    isActive: true,
  });
  const token = localStorage.getItem("adminToken");

  // Fetch all vacancies
  const fetchVacancies = async () => {
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
      console.log("Fetched vacancies:", data);
      setVacancies(data.data);
    } catch (err) {
      console.error("Failed to fetch vacancies:", err);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchVacancies();
  }, []);

  // Handle add/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingVacancy ? "PUT" : "POST";
    const url = editingVacancy ? `${API_URL}/${editingVacancy._id}` : API_URL;

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
        title: "",
        location: "",
        description: "",
        employmentType: "",
        industry: "",
        closingDate: "",
        isActive: true,
      });
      setEditingVacancy(null);
      fetchVacancies();
    } catch (err) {
      console.error("Failed to save vacancy:", err);
    }
  };

  // Handle edit click
  const handleEdit = (vac) => {
    setEditingVacancy(vac);
    setFormData({
      title: vac.title,
      location: vac.location,
      description: vac.description,
      employmentType: vac.employmentType,
      industry: vac.industry,
      closingDate: vac.closingDate ? vac.closingDate.slice(0, 10) : "",
      isActive: vac.isActive,
    });
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this vacancy?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      if (!res.ok) throw new Error(`Delete failed with ${res.status}`);
      fetchVacancies();
    } catch (err) {
      console.error("Failed to delete vacancy:", err);
    }
  };

  const styles = {
    container: { padding: "20px" },
    form: {
      display: "grid",
      gap: "10px",
      maxWidth: "400px",
      marginBottom: "20px",
      background: "#f7f7f7",
      padding: "15px",
      borderRadius: "6px",
    },
    table: { width: "100%", borderCollapse: "collapse", marginTop: "20px" },
    thtd: {
      border: "1px solid #ccc",
      padding: "8px",
      textAlign: "left",
      fontSize: "14px",
    },
    btn: {
      padding: "6px 12px",
      marginRight: "6px",
      cursor: "pointer",
      border: "none",
      borderRadius: "4px",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Vacancies Management</h2>

      {/* Add/Edit Form */}
      <form style={styles.form} onSubmit={handleSubmit}>
        <h3>{editingVacancy ? "Edit Vacancy" : "Add Vacancy"}</h3>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Employment Type"
          value={formData.employmentType}
          onChange={(e) =>
            setFormData({ ...formData, employmentType: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Industry"
          value={formData.industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
        />
        <label>
          Closing Date:
          <input
            type="date"
            value={formData.closingDate}
            onChange={(e) =>
              setFormData({ ...formData, closingDate: e.target.value })
            }
          />
        </label>
        <label>
          Active:
          <input
            type="checkbox"
            checked={formData.isActive}
            onChange={(e) =>
              setFormData({ ...formData, isActive: e.target.checked })
            }
          />
        </label>
        <button style={{ ...styles.btn, background: "#3498db", color: "#fff" }}>
          {editingVacancy ? "Update" : "Add"}
        </button>
      </form>

      {/* Table */}
      {loading ? (
        <p>Loading vacancies...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              {[
                "Title",
                "Location",
                "Employment Type",
                "Industry",
                "Posted",
                "Closing Date",
                "Active",
                "Actions",
              ].map((h) => (
                <th key={h} style={styles.thtd}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vacancies.map((v) => (
              <tr key={v._id}>
                <td style={styles.thtd}>{v.title}</td>
                <td style={styles.thtd}>{v.location}</td>
                <td style={styles.thtd}>{v.employmentType}</td>
                <td style={styles.thtd}>{v.industry}</td>
                <td style={styles.thtd}>
                  {new Date(v.postedAt).toLocaleDateString()}
                </td>
                <td style={styles.thtd}>
                  {v.closingDate
                    ? new Date(v.closingDate).toLocaleDateString()
                    : "-"}
                </td>
                <td style={styles.thtd}>{v.isActive ? "Yes" : "No"}</td>
                <td style={styles.thtd}>
                  <button
                    style={{ ...styles.btn, background: "#2ecc71", color: "#fff" }}
                    onClick={() => handleEdit(v)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ ...styles.btn, background: "#e74c3c", color: "#fff" }}
                    onClick={() => handleDelete(v._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {vacancies.length === 0 && (
              <tr>
                <td style={styles.thtd} colSpan="8">
                  No vacancies found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VacancyPage;
