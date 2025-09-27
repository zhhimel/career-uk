const express = require('express');
const routerAuth = express.Router();
const authCtrl = require('../controllers/authController');
routerAuth.post('/admin/login', authCtrl.login);
routerAuth.get('/admin/verify',authCtrl.verifyToken);

module.exports = routerAuth;