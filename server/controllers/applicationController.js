const Application = require('../models/Application');
const Vacancy2 = require('../models/Vacancy');


exports.createApplication = async (req, res) => {
    const app = await Application.create(req.body);
    res.status(201).json(app);
};


exports.getApplications = async (req, res) => {
    const { page = 1, limit = 20, q, vacancy } = req.query;
    const filter = {};
    if (q) filter.$or = [{ fullName: new RegExp(q, 'i') }, { email: new RegExp(q, 'i') }, { phone: new RegExp(q, 'i') }];
    if (vacancy) filter.vacancy = vacancy;
    const data = await Application.find(filter).populate('vacancy').sort({ submittedAt: -1 }).skip((page - 1) * limit).limit(Number(limit));
    const total = await Application.countDocuments(filter);
    res.json({ data, meta: { page: Number(page), limit: Number(limit), total } });
};


exports.getApplication = async (req, res) => {
    const application = await Application.findById(req.params.id).populate('vacancy');
    if (!application) return res.status(404).json({ message: 'Not found' });
    res.json(application);
};


exports.exportApplicationsCsv = async (req, res) => {
    // simple CSV export using csv-writer
    const apps = await Application.find({}).populate('vacancy').sort({ submittedAt: -1 });
    const { createObjectCsvStringifier } = require('csv-writer');
    const csvStringifier = createObjectCsvStringifier({
        header: [
            { id: 'submittedAt', title: 'SubmittedAt' },
            { id: 'fullName', title: 'FullName' },
            { id: 'email', title: 'Email' },
            { id: 'phone', title: 'Phone' },
            { id: 'vacancyTitle', title: 'Vacancy' },
            { id: 'experience', title: 'Experience' },
            { id: 'qualifications', title: 'Qualifications' },
        ],
    });
    const records = apps.map(a => ({
        submittedAt: a.submittedAt.toISOString(),
        fullName: a.fullName,
        email: a.email,
        phone: a.phone,
        vacancyTitle: a.vacancy?.title || '',
        experience: a.experience || '',
        qualifications: a.qualifications || '',
    }));
    const csv = csvStringifier.getHeaderString() + csvStringifier.stringifyRecords(records);
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=applications.csv');
    res.send(csv);
};