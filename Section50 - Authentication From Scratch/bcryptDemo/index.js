const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const path = require('path');
const session = require('express-session');

const app = express();


mongoose.connect('mongodb://localhost:27017/bcryptDemo')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    }).catch(err => {
        console.log("OH NO MONGO sCONNECTION ERROR!")
        console.log(err)
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))
const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};
app.use(session(sessionConfig));


const requireLogin = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    next();
};

app.get('/user/:id',requireLogin, async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.render('user.ejs', { user });
});

app.get('/register', async (req, res) => {
    res.render('register.ejs');
});

app.get('/login', async (req, res) => {
    res.render('login.ejs');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body.user;
    const user = await User.findOne({ username });
    const foundUser = await User.findAndValidate(username, password);
    if (!foundUser) {
        res.send('Try again!');
    }
    req.session.userId = foundUser._id;
    res.redirect(`/user/${foundUser._id}`);
});

app.get('/logout', requireLogin, async (req, res) => {
    req.session.userId = null;
    res.redirect('/login');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body.user;
    const user = new User({ username, password });
    await user.save();
    req.session.userId = user._id;
    res.redirect(`/user/${user._id}`);
});

app.get('/secret',requireLogin, async (req, res) => {
    res.send('This is a secret page.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});