const { Schema, model } = require('mongoose');

const InquirySchema = new Schema({
    companyName: { type: String, required: true },
    contactPerson: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    industrySector: { type: String },
    typeOfRecruitment: { type: String },
    positionsToFill: { type: String },
    jobDescriptions: { type: String },
    additionalRequirements: { type: String },
    preferredStartDate: { type: Date },
    heardAboutUs: { type: String },
    submittedAt: { type: Date, default: Date.now },
});


module.exports = model('Inquiry', InquirySchema);