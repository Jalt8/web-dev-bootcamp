const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const Campground = require('./models/campground')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const AppError = require('./utils/AppError');
const wrapAsync = require('./utils/catchasync')

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

app.listen(3000, () => {
    console.log("RUNNING ON PORT 3000!")
})

app.get('/campgrounds', wrapAsync(async (req, res) => {
    const campgrounds = await Campground.find()
    res.render("campgrounds/index.ejs", { campgrounds })
}))

app.get('/campgrounds/new', wrapAsync(async (req, res) => {
    res.render("campgrounds/new.ejs")
}))

app.get('/campgrounds/:id', wrapAsync(async (req, res) => {
    const { id } = req.params
    const campground = await Campground.findById(id)
    if (!campground) {
        return next(new AppError('Campground Not Found', 404));
    }
    res.render('campgrounds/show.ejs', { campground })
}))

app.get('/campgrounds/:id/edit', wrapAsync(async (req, res) => {
    const { id } = req.params
    const campground = await Campground.findById(id)
    if (!campground) {
        return next(new AppError('Campground Not Found', 404));
    }
    res.render('campgrounds/edit.ejs', { campground })
}))

app.post('/campgrounds', wrapAsync(async (req, res) => {
    const newCampground = new Campground(req.body)
    await newCampground.save()
    if (!req.body) {
        return next(new AppError('No request body', 404));
    }
    res.redirect(`campgrounds/${newCampground.id}`)
}))

app.put('/campgrounds/:id', wrapAsync(async (req, res) => {
    const { id } = req.params
    const campground = await Campground.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    if (!campground) {
        return next(new AppError('Campground Not Found', 404));
    }
    res.redirect(`/campgrounds/${campground.id}`)
}))

app.delete('/campgrounds/:id', wrapAsync(async (req, res) => {
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
    const { status = 500, message = 'Something Went Wrong' } = err
    res.status(status).send(message)
})