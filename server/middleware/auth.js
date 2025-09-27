const jwt = require('jsonwebtoken');
const AdminUser = require('../models/AdminUser');


module.exports = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).json({ message: 'Unauthorized' });
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await AdminUser.findById(decoded.id).select('-passwordHash');
        if (!admin) return res.status(401).json({ message: 'Unauthorized' });
        req.admin = admin;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}; 
