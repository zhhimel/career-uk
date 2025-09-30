import React, { useState, useEffect } from "react";
import "./RecruitmentForm.css";
import Footer from "../../components/Footer/Footer";

const industries = [
  "Commercial",
  "Industrial",
  "Healthcare",
  "IT & Technology",
  "Hospitality",
  "Retail",
  "Other",
];

const referrals = ["Referral", "Online Search", "Advertisement", "Other"];

const recruitmentTypes = ["Permanent Staffing", "Temporary Staffing", "Both"];

const RecruitmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industry: "",
    customIndustry: "",
    recruitmentType: [] as string[], // multi-select
    position: "",
    jobDescription: "",
    additionalReq: "",
    startDate: "",
    referral: "",
    customReferral: "",
  });

  // Dropdown states
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [industrySearch, setIndustrySearch] = useState("");

  const [isReferralOpen, setIsReferralOpen] = useState(false);
  const [referralSearch, setReferralSearch] = useState("");

  const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Industry
  const handleIndustrySelect = (value: string) => {
    setFormData({ ...formData, industry: value, customIndustry: "" });
    setIsIndustryOpen(false);
    setIndustrySearch("");
  };
  const filteredIndustries = industries.filter((ind) =>
    ind.toLowerCase().includes(industrySearch.toLowerCase())
  );

  // Referral
  const handleReferralSelect = (value: string) => {
    setFormData({ ...formData, referral: value, customReferral: "" });
    setIsReferralOpen(false);
    setReferralSearch("");
  };
  const filteredReferrals = referrals.filter((ref) =>
    ref.toLowerCase().includes(referralSearch.toLowerCase())
  );

  // Recruitment Type (checkbox dropdown)
  const handleRecruitmentChange = (value: string) => {
    let updated = [...formData.recruitmentType];
    if (updated.includes(value)) {
      updated = updated.filter((v) => v !== value);
    } else {
      updated.push(value);
    }
    setFormData({ ...formData, recruitmentType: updated });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalIndustry =
      formData.industry === "Other" ? formData.customIndustry : formData.industry;

    const finalReferral =
      formData.referral === "Other" ? formData.customReferral : formData.referral;

    console.log("Submitted Form:", {
      ...formData,
      industry: finalIndustry,
      referral: finalReferral,
    });
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <form className="recruitment-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Recruitment Inquiry Form</h2>

        {/* Company Name */}
        <label>Company Name</label>
        <input
          type="text"
          name="companyName"
          placeholder="Enter your company name"
          value={formData.companyName}
          onChange={handleChange}
          required
        />

        {/* Contact Person */}
        <label>Contact Person</label>
        <input
          type="text"
          name="contactPerson"
          placeholder="Full name of the person filling out the form"
          value={formData.contactPerson}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your business email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your contact number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        {/* Industry Dropdown */}
        <label>Industry Sector</label>
        <div className="dropdown-wrapper">
          <div
            className="dropdown-header"
            onClick={() => setIsIndustryOpen(!isIndustryOpen)}
          >
            {formData.industry || "Select your industry"}
            <span className="dropdown-icon">{isIndustryOpen ? "▲" : "▼"}</span>
          </div>

          {isIndustryOpen && (
            <div className="dropdown-content">
              <input
                type="text"
                placeholder="Search industry..."
                className="dropdown-search"
                value={industrySearch}
                onChange={(e) => setIndustrySearch(e.target.value)}
              />
              <div className="dropdown-list">
                {filteredIndustries.map((ind) => (
                  <div
                    key={ind}
                    className={`dropdown-item ${
                      formData.industry === ind ? "selected" : ""
                    }`}
                    onClick={() => handleIndustrySelect(ind)}
                  >
                    {ind}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {formData.industry === "Other" && (
          <>
            <label>Specify Industry</label>
            <input
              type="text"
              name="customIndustry"
              placeholder="Enter your industry"
              value={formData.customIndustry}
              onChange={handleChange}
              required
            />
          </>
        )}

        {/* Recruitment Type Dropdown with Checkboxes */}
        <label>Type of Recruitment</label>
        <div className="dropdown-wrapper">
          <div
            className="dropdown-header"
            onClick={() => setIsRecruitmentOpen(!isRecruitmentOpen)}
          >
            {formData.recruitmentType.length > 0
              ? formData.recruitmentType.join(", ")
              : "Select recruitment type"}
            <span className="dropdown-icon">{isRecruitmentOpen ? "▲" : "▼"}</span>
          </div>

          {isRecruitmentOpen && (
            <div className="dropdown-content">
              <div className="dropdown-list">
                {recruitmentTypes.map((type) => (
                  <label key={type} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={formData.recruitmentType.includes(type)}
                      onChange={() => handleRecruitmentChange(type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Position */}
        <label>Position(s) to Fill</label>
        <input
          type="text"
          name="position"
          placeholder="Provide details of the roles you're looking to fill"
          value={formData.position}
          onChange={handleChange}
        />

        {/* Job Description */}
        <label>Job Description(s)</label>
        <textarea
          name="jobDescription"
          placeholder="Attach any relevant job descriptions or additional information"
          value={formData.jobDescription}
          onChange={handleChange}
        />

        {/* Additional Requirements */}
        <label>Additional Requirements</label>
        <textarea
          name="additionalReq"
          placeholder="Enter any specific requirements or preferences for the candidates"
          value={formData.additionalReq}
          onChange={handleChange}
        />

        {/* Start Date */}
        <label>Preferred Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />

        {/* Referral Dropdown */}
        <label>How did you hear about us?</label>
        <div className="dropdown-wrapper">
          <div
            className="dropdown-header"
            onClick={() => setIsReferralOpen(!isReferralOpen)}
          >
            {formData.referral || "Select an option"}
            <span className="dropdown-icon">{isReferralOpen ? "▲" : "▼"}</span>
          </div>

          {isReferralOpen && (
            <div className="dropdown-content">
              <input
                type="text"
                placeholder="Search..."
                className="dropdown-search"
                value={referralSearch}
                onChange={(e) => setReferralSearch(e.target.value)}
              />
              <div className="dropdown-list">
                {filteredReferrals.map((ref) => (
                  <div
                    key={ref}
                    className={`dropdown-item ${
                      formData.referral === ref ? "selected" : ""
                    }`}
                    onClick={() => handleReferralSelect(ref)}
                  >
                    {ref}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {formData.referral === "Other" && (
          <>
            <label>Specify Source</label>
            <input
              type="text"
              name="customReferral"
              placeholder="Enter source"
              value={formData.customReferral}
              onChange={handleChange}
              required
            />
          </>
        )}

        {/* Submit */}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

const RecruitmentInquiryForm: React.FC = () => {
   useEffect(() => {
        document.title = "Recruitment Inquiry Form - BreezNest Ltd"; // Set tab title
   }, []);
  return (
    <div className="recruitment-inquiry-form-page">
      <RecruitmentForm/>
      <Footer/>
    </div>
  );
};

export default RecruitmentInquiryForm;




