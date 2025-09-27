const { Schema, model } = require('mongoose');

const ApplicationSchema = new Schema({
    vacancy: { type: Schema.Types.ObjectId, ref: 'Vacancy' },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    location: { type: String },
    preferredRole: { type: String },
    industry: { type: String },
    availability: { type: String },
    experience: { type: String },
    qualifications: { type: String },
    preferredLocations: { type: String },
    heardAboutUs: { type: String },
    resumeUrl: { type: String },
    submittedAt: { type: Date, default: Date.now },
});


module.exports = model('Application', ApplicationSchema);