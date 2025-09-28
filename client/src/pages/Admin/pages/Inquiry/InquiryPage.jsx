import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:5001/api/inquiries"; // ✅ Adjust if needed

const InquiryPage = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingInquiry, setEditingInquiry] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(10); // items per page
  const token = localStorage.getItem("adminToken");

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industrySector: "",
    typeOfRecruitment: "",
    positionsToFill: "",
    jobDescriptions: "",
    additionalRequirements: "",
    preferredStartDate: "",
    heardAboutUs: "",
  });

  // Fetch inquiries
  const fetchInquiries = async (currentPage = page) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}?page=${currentPage}&limit=${limit}`, {
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setInquiries(data.data || []);
      setTotal(data.meta?.total || 0);
      setPage(data.meta?.page || 1);
    } catch (err) {
      console.error("Failed to fetch inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries(1);
    // eslint-disable-next-line
  }, []);

  // Handle add/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingInquiry ? "PUT" : "POST";
    const url = editingInquiry ? `${API_URL}/${editingInquiry._id}` : API_URL;

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
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        industrySector: "",
        typeOfRecruitment: "",
        positionsToFill: "",
        jobDescriptions: "",
        additionalRequirements: "",
        preferredStartDate: "",
        heardAboutUs: "",
      });
      setEditingInquiry(null);
      fetchInquiries(page);
    } catch (err) {
      console.error("Failed to save inquiry:", err);
    }
  };

  // Handle edit
  const handleEdit = (inq) => {
    setEditingInquiry(inq);
    setFormData({
      companyName: inq.companyName || "",
      contactPerson: inq.contactPerson || "",
      email: inq.email || "",
      phone: inq.phone || "",
      industrySector: inq.industrySector || "",
      typeOfRecruitment: inq.typeOfRecruitment || "",
      positionsToFill: inq.positionsToFill || "",
      jobDescriptions: inq.jobDescriptions || "",
      additionalRequirements: inq.additionalRequirements || "",
      preferredStartDate: inq.preferredStartDate
        ? inq.preferredStartDate.slice(0, 10)
        : "",
      heardAboutUs: inq.heardAboutUs || "",
    });
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this inquiry?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      if (!res.ok) throw new Error(`Delete failed with ${res.status}`);
      fetchInquiries(page);
    } catch (err) {
      console.error("Failed to delete inquiry:", err);
    }
  };

  // Pagination
  const totalPages = Math.ceil(total / limit);
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      fetchInquiries(newPage);
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
    pagination: {
      marginTop: "15px",
      display: "flex",
      justifyContent: "center",
      gap: "8px",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Inquiries Management</h2>

      {/* Add/Edit Form */}
      <form style={styles.form} onSubmit={handleSubmit}>
        <h3>{editingInquiry ? "Edit Inquiry" : "Add Inquiry"}</h3>
        <input
          type="text"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={(e) =>
            setFormData({ ...formData, companyName: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Contact Person"
          value={formData.contactPerson}
          onChange={(e) =>
            setFormData({ ...formData, contactPerson: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Industry Sector"
          value={formData.industrySector}
          onChange={(e) =>
            setFormData({ ...formData, industrySector: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Type of Recruitment"
          value={formData.typeOfRecruitment}
          onChange={(e) =>
            setFormData({ ...formData, typeOfRecruitment: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Positions to Fill"
          value={formData.positionsToFill}
          onChange={(e) =>
            setFormData({ ...formData, positionsToFill: e.target.value })
          }
        />
        <textarea
          placeholder="Job Descriptions"
          value={formData.jobDescriptions}
          onChange={(e) =>
            setFormData({ ...formData, jobDescriptions: e.target.value })
          }
        />
        <textarea
          placeholder="Additional Requirements"
          value={formData.additionalRequirements}
          onChange={(e) =>
            setFormData({
              ...formData,
              additionalRequirements: e.target.value,
            })
          }
        />
        <label>
          Preferred Start Date:
          <input
            type="date"
            value={formData.preferredStartDate}
            onChange={(e) =>
              setFormData({
                ...formData,
                preferredStartDate: e.target.value,
              })
            }
          />
        </label>
        <input
          type="text"
          placeholder="Heard About Us"
          value={formData.heardAboutUs}
          onChange={(e) =>
            setFormData({ ...formData, heardAboutUs: e.target.value })
          }
        />
        <button style={{ ...styles.btn, background: "#3498db", color: "#fff" }}>
          {editingInquiry ? "Update" : "Add"}
        </button>
      </form>

      {/* Table */}
      {loading ? (
        <p>Loading inquiries...</p>
      ) : (
        <>
          <table style={styles.table}>
            <thead>
              <tr>
                {[
                  "Company",
                  "Contact",
                  "Email",
                  "Phone",
                  "Industry",
                  "Type",
                  "Positions",
                  "Start Date",
                  "Actions",
                ].map((h) => (
                  <th key={h} style={styles.thtd}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {inquiries.map((i) => (
                <tr key={i._id}>
                  <td style={styles.thtd}>{i.companyName}</td>
                  <td style={styles.thtd}>{i.contactPerson || "-"}</td>
                  <td style={styles.thtd}>{i.email}</td>
                  <td style={styles.thtd}>{i.phone || "-"}</td>
                  <td style={styles.thtd}>{i.industrySector || "-"}</td>
                  <td style={styles.thtd}>{i.typeOfRecruitment || "-"}</td>
                  <td style={styles.thtd}>{i.positionsToFill || "-"}</td>
                  <td style={styles.thtd}>
                    {i.preferredStartDate
                      ? new Date(i.preferredStartDate).toLocaleDateString()
                      : "-"}
                  </td>
                  <td style={styles.thtd}>
                    <button
                      style={{
                        ...styles.btn,
                        background: "#2ecc71",
                        color: "#fff",
                      }}
                      onClick={() => handleEdit(i)}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        ...styles.btn,
                        background: "#e74c3c",
                        color: "#fff",
                      }}
                      onClick={() => handleDelete(i._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {inquiries.length === 0 && (
                <tr>
                  <td style={styles.thtd} colSpan="9">
                    No inquiries found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div style={styles.pagination}>
            <button
              style={styles.btn}
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Prev
            </button>
            <span>
              Page {page} of {totalPages || 1}
            </span>
            <button
              style={styles.btn}
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages || totalPages === 0}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default InquiryPage;
