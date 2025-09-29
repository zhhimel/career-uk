const express5 = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB3 = require('./config/db');
require('dotenv').config();


const app = express5();
app.use(express5.json());
app.use(cors({ origin: '*', credentials: true }));

app.use(morgan('dev'));
app.use(express5.urlencoded({ extended: true })); // ✅ for x-www-form-urlencoded



connectDB3(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/careerup');


app.get('/', (req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/vacancies', require('./routes/vacancyRoutes'));
app.use('/api/applications', require('./routes/applicationRoutes'));
app.use('/api/inquiries', require('./routes/inquiryRoutes'));
app.use('*', (req, res) => res.status(404).json({ message: 'Not Found' }));
// basic error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({ message: err.message || 'Server error' });
});
const bcrypt = require("bcryptjs");




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));