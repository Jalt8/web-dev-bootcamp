const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const Campground = require('./models/campground')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const AppError = require('./utils/AppError');
const wrapAsync = require('./utils/catchasync')
const { campgroundSchema } = require('./schemas')


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

const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        return next(new AppError(msg, 400));
    } else {
        next();
    }
}

app.listen(3000, () => {
    console.log("RUNNING ON PORT 3000!")
})

app.get('/campgrounds', wrapAsync(async (req, res, next) => {
    const campgrounds = await Campground.find()
    res.render("campgrounds/index.ejs", { campgrounds })
}))

app.get('/campgrounds/new', wrapAsync(async (req, res, next) => {
    res.render("campgrounds/new.ejs")
}))

app.get('/campgrounds/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const campground = await Campground.findById(id)
    if (!campground) {
        return next(new AppError('Campground Not Found', 404));
    }
    res.render('campgrounds/show.ejs', { campground })
}))

app.get('/campgrounds/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const campground = await Campground.findById(id)
    if (!campground) {
        return next(new AppError('Campground Not Found', 404));
    }
    res.render('campgrounds/edit.ejs', { campground })
}))

app.post('/campgrounds', validateCampground, wrapAsync(async (req, res, next) => {
    const newCampground = new Campground(req.body.campground);
    await newCampground.save();
    res.redirect(`/campgrounds/${newCampground.id}`);
}));

app.put('/campgrounds/:id', validateCampground, wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const campground = await Campground.findByIdAndUpdate(id, req.body.campground, { runValidators: true, new: true })
    if (!campground) {
        return next(new AppError('Campground Not Found', 404));
    }
    res.redirect(`/campgrounds/${campground.id}`)
}))

app.delete('/campgrounds/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const campground = await Campground.findByIdAndDelete(id)
    if (!campground) {
        return next(new AppError('Campground Not Found', 404));
    }
    res.redirect(`/campgrounds`)
}))

const handleCastErr = err => {
    console.dir(err);
    //In a real app, we would do a lot more here...
    return new AppError(`Cast Failed...${err.message}. Please provide a valid number`, 400)
}

app.use((err, req, res, next) => {
    console.log(err.name);
    //We can single out particular types of Mongoose Errors:
    if (err.name === 'CastError') err = handleCastErr(err)
    next(err);
})

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