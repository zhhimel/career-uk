const bcrypt2 = require('bcryptjs');
const mongoose2 = require('mongoose');
const connectDB2 = require('../config/db');
const AdminUser3 = require('../models/AdminUser');
const Vacancy3 = require('../models/Vacancy');


async function seed() {
await connectDB2(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/careerup');
await AdminUser3.deleteMany({});
await Vacancy3.deleteMany({});
const pw = await bcrypt2.hash('admin123', 10);
await AdminUser3.create({ name: 'Admin', email: 'admin@careerup.test', passwordHash: pw });
await Vacancy3.create({ title: 'Graphic Designer Wanted – Full-Time, London', location: 'London', description: 'We’re Hiring: Graphic Designer – Full-Time, London We are looking for a creative and detail-oriented Graphic Designer to join our team in London.' });
console.log('Seed finished');
process.exit(0);
}


if (require.main === module) seed();