const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/catchasync');
const AppError = require('../utils/AppError');
const User = require('../models/user');
const { userSchema } = require('../schemas');
const passport = require('passport');
const { storeReturnTo } = require('../utils/middleware');

module.exports.register = async (req, res) => {
    res.render('users/register');
}

module.exports.createUser = async (req, res, next) => {
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
}

module.exports.login = async (req, res) => {
    res.render('users/login');
}

module.exports.logout = async (req, res) => {
    req.logout( function (err) {
        if (err) { 
            return next(err); 
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
}

module.exports.loginUser = async (req, res) => {
    req.flash('success', 'Welcome back!');
    const redirectUrl = res.locals.returnTo || '/campgrounds';
    if(redirectUrl === '/login') {
        redirectUrl = '/campgrounds';
    }
    res.redirect(redirectUrl);
}