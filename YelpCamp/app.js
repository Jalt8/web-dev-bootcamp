const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const AppError = require('./utils/AppError');
const wrapAsync = require('./utils/catchasync');
const { campgroundSchema, reviewSchema } = require('./schemas');
const Review = require('./models/review');
const Campground = require('./models/campground');
const User = require('./models/user');

const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');
const userRoutes = require('./routes/users');

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    }).catch(err => {
        console.log("OH NO MONGO sCONNECTION ERROR!")
        console.log(err)
    })

app.engine("ejs", ejsMate)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))


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
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    console.log(req.session)
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});

app.listen(3000, () => {
    console.log("RUNNING ON PORT 3000!")
})

app.get('/fakeUser', async (req, res) => {
    const user = new User({ email: 'test',username: 'jake' });
    const newUser = await User.register(user, 'chicken');
    res.send(newUser);
});

app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/reviews', reviewRoutes);
app.use('/', userRoutes);

const handleCastErr = err => {
    console.dir(err);
    //In a real app, we would do a lot more here...
    return new AppError(`Cast Failed...${err.message}. Please provide a valid number`, 400)
}

app.use((err, req, res, next) => {
    if (err.name === 'CastError') {
        req.flash('error', 'Invalid Campground ID.');
        return res.redirect('/campgrounds');
    }
    next(err);
});

app.all(('*'), (req, res, next) => {
    next(new AppError('Page Not Found'), 404)
})

app.use((err, req, res, next) => {
    const { status = 500 } = err
    if (!err.message) {
        err.message = 'Something Went Wrong'
    }
    res.status(status).render('error.ejs', { err })
})
