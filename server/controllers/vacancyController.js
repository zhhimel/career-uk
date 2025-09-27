const Vacancy = require('../models/Vacancy');


exports.createVacancy = async (req, res) => {
const payload = req.body;
const vacancy = await Vacancy.create(payload);
res.status(201).json(vacancy);
};


exports.getVacancies = async (req, res) => {
const { page = 1, limit = 20, q, active } = req.query;
const filter = {};
if (q) filter.$or = [{ title: new RegExp(q, 'i') }, { description: new RegExp(q, 'i') }, { industry: new RegExp(q, 'i') }];
if (active !== undefined) filter.isActive = active === 'true';
const vacancies = await Vacancy.find(filter)
.sort({ postedAt: -1 })
.skip((page - 1) * limit)
.limit(Number(limit));
const count = await Vacancy.countDocuments(filter);
res.json({ data: vacancies, meta: { page: Number(page), limit: Number(limit), total: count } });
};


exports.getVacancy = async (req, res) => {
const vacancy = await Vacancy.findById(req.params.id);
if (!vacancy) return res.status(404).json({ message: 'Not found' });
res.json(vacancy);
};


exports.updateVacancy = async (req, res) => {
const vacancy = await Vacancy.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!vacancy) return res.status(404).json({ message: 'Not found' });
res.json(vacancy);
};


exports.deleteVacancy = async (req, res) => {
await Vacancy.findByIdAndDelete(req.params.id);
res.status(204).end();
};