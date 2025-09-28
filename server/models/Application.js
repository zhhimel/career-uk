const { Schema, model } = require('mongoose');

const ApplicationSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String , required: true},
    location: { type: String, required: true },
    preferredRole: { type: String , required: true},
    industry: { type: String , required: true},
    availability: { type: String, required: true },
    experience: { type: String, required: true },
    qualifications: { type: String, required: true },
    preferredLocations: { type: String, required: true },
    heardAboutUs: { type: String , required: true},
    submittedAt: { type: Date, default: Date.now },
});


module.exports = model('Applications', ApplicationSchema);