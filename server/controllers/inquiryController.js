const Inquiry = require('../models/Inquiry');


exports.createInquiry = async (req, res) => {
    const iq = await Inquiry.create(req.body);
    res.status(201).json(iq);
};


exports.getInquiries = async (req, res) => {
    const { page = 1, limit = 20, q } = req.query;
    const filter = {};
    if (q) filter.$or = [{ companyName: new RegExp(q, 'i') }, { contactPerson: new RegExp(q, 'i') }, { email: new RegExp(q, 'i') }];
    const data = await Inquiry.find(filter).sort({ submittedAt: -1 }).skip((page - 1) * limit).limit(Number(limit));
    const total = await Inquiry.countDocuments(filter);
    res.json({ data, meta: { page: Number(page), limit: Number(limit), total } });
};


exports.getInquiry = async (req, res) => {
    const iq = await Inquiry.findById(req.params.id);
    if (!iq) return res.status(404).json({ message: 'Not found' });
    res.json(iq);
};
exports.deleteInquiry = async (req, res) => {
    const iq = await Inquiry.findByIdAndDelete(req.params.id);
    if (!iq) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
};
exports.updateInquiry = async (req, res) => {
    const iq = await Inquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!iq) return res.status(404).json({ message: 'Not found' });
    res.json(iq);
};