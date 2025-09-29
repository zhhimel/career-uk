const express4 = require('express');
const irouter = express4.Router();
const iqCtrl = require('../controllers/inquiryController');
const auth3 = require('../middleware/auth');
// Public create
irouter.post('/', iqCtrl.createInquiry);
// Admin read
irouter.get('/', auth3, iqCtrl.getInquiries);
irouter.get('/:id', auth3, iqCtrl.getInquiry);
irouter.delete('/:id', auth3, iqCtrl.deleteInquiry);
irouter.put('/:id', auth3, iqCtrl.updateInquiry);
module.exports = irouter;