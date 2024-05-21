const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/catchasync');
const AppError = require('../utils/AppError');
const Campground = require('../models/campground');
const { campgroundSchema, reviewSchema } = require('../schemas');
const middleware = require('../middleware');


const { isLoggedIn } = middleware;

const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        return next(new AppError(msg, 400));
    } else {
        next();
    }
}

router.get('/', wrapAsync(async (req, res, next) => {
    const campgrounds = await Campground.find()
    res.render("campgrounds/index.ejs", { campgrounds })
}))

router.get('/new',isLoggedIn, wrapAsync(async (req, res, next) => {
    res.render("campgrounds/new.ejs")
}))

router.get('/:id', wrapAsync(async (req, res, next) => {
    const campground = await Campground.findById(req.params.id).populate('reviews');
    if (!campground) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/show.ejs', { campground });
}));

router.get('/:id/edit', isLoggedIn, wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const campground = await Campground.findById(id)
    if (!campground) {
        return next(new AppError('Campground Not Found', 404));
    }
    res.render('campgrounds/edit.ejs', { campground })
}))

router.post('/', isLoggedIn, validateCampground, wrapAsync(async (req, res, next) => {
    req.flash('success', 'Successfully made a new campground!');
    const newCampground = new Campground(req.body.campground);
    await newCampground.save();
    res.redirect(`/campgrounds/${newCampground.id}`);
}));

router.put('/:id', isLoggedIn, validateCampground, wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const campground = await Campground.findByIdAndUpdate(id, req.body.campground, { runValidators: true, new: true })
    if (!campground) {
        return next(new AppError('Campground Not Found', 404));
    }
    req.flash('success', 'Successfully updated a campground!');
    res.redirect(`/campgrounds/${campground.id}`)
}))

router.delete('/:id', isLoggedIn, wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const campground = await Campground.findByIdAndDelete(id)
    if (!campground) {
        return next(new AppError('Campground Not Found', 404));
    }
    res.redirect(`/campgrounds`)
}))

module.exports = router;