const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/catchasync');
const AppError = require('../utils/AppError');
const User = require('../models/user');
const { userSchema } = require('../schemas');
const passport = require('passport');
const { storeReturnTo } = require('../utils/middleware');
const users = require('../controllers/users');
const user = require('../models/user');

router.route('/register')
    .get(users.register)
    .post(wrapAsync(users.createUser));

router.route('/login')
    .get(users.login)
    .post(storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.loginUser);

router.get('/logout', users.logout); 

module.exports = router;