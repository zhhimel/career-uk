const bcrypt = require('bcryptjs');
const jwt2 = require('jsonwebtoken');
const AdminUser2 = require('../models/AdminUser');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const admin = await AdminUser2.findOne({ email });
    if (!admin) return res.status(400).json({ message: 'Invalid credentials' });
    const match = await bcrypt.compare(password, admin.passwordHash);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt2.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, admin: { id: admin._id, name: admin.name, email: admin.email } });
};
exports.verifyToken = (req, res) => {
    
    const token = req.headers.authorization?.split(' ')[1];
    console.log("Verifying token:", token);
    if (!token) return res.status(401).json({ message: 'No token provided' });
    try {
        const decoded = jwt2.verify(token, process.env.JWT_SECRET);
        res.json({ valid: true, decoded });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};