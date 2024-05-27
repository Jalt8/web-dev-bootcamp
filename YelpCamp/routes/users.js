const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/catchasync');
const AppError = require('../utils/AppError');
const User = require('../models/user');
const { userSchema } = require('../schemas');
const passport = require('passport');
const { storeReturnTo } = require('../utils/middleware');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', wrapAsync(async (req, res, next) => {
    try {
        const { username, password, email } = req.body.user;
        const user = new User({ username, email });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) { return next(err) }
            console.log('new user:', registeredUser)
            req.flash('success', `Welcome ${username}!`)
            return res.redirect('/campgrounds')
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}));

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.get('/logout', (req, res) => {
    req.logout( function (err) {
        if (err) { 
            return next(err); 
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
}); 

router.post('/login', storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    req.flash('success', 'Welcome back!');
    const redirectUrl = res.locals.returnTo || '/campgrounds';
    res.redirect(redirectUrl);
});    

module.exports = router;