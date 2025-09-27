const express3 = require('express');
const arouter = express3.Router();
const appCtrl = require('../controllers/applicationController');
const auth2 = require('../middleware/auth');
// Public endpoint for candidates to submit applications
arouter.post('/', appCtrl.createApplication);
// Admin endpoints
arouter.get('/', auth2, appCtrl.getApplications);
arouter.get('/export/csv', auth2, appCtrl.exportApplicationsCsv);
arouter.get('/:id', auth2, appCtrl.getApplication);
module.exports = arouter;