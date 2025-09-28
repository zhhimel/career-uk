const { Schema, model } = require('mongoose');


const VacancySchema = new Schema({
    title: { type: String, },
    location: { type: String },
    description: { type: String },
    employmentType: { type: String },
    industry: { type: String },
    postedAt: { type: Date, default: Date.now },
    closingDate: { type: Date },
    isActive: { type: Boolean, default: true },
    meta: { type: Schema.Types.Mixed },
});


module.exports = model('vacancies', VacancySchema);