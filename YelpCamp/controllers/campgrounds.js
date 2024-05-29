const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/catchasync');
const AppError = require('../utils/AppError');
const Campground = require('../models/campground');
const { campgroundSchema, reviewSchema } = require('../schemas');
const middleware = require('../utils/middleware');

module.exports.index = async (req, res) => {
    const campgrounds = await Campground.find()
    res.render("campgrounds/index.ejs", { campgrounds })
}

module.exports.renderNewForm = (req, res) => {
    res.render("campgrounds/new.ejs")
}

module.exports.createCampground = async (req, res, next) => {
    const campground = new Campground(req.body.campground)
    campground.author = req.user._id
    await campground.save()
    req.flash('success', 'Successfully made a new campground!')
    res.redirect(`/campgrounds/${campground.id}`)
}

module.exports.showCampground = async (req, res, next) => {
    const campground = await Campground.findById(req.params.id).populate({ 
        path: 'reviews', 
        populate: {
        path: 'author'
    }}).populate('author');
    if (!campground) {
        req.flash('error', 'Cannot find that campground!')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/show.ejs', { campground })
}

module.exports.renderEditForm = async (req, res, next) => {
    const { id } = req.params
    const campground = await Campground.findById(id)
    if (!campground) {
        return next(new AppError('Campground Not Found', 404))
    }
    res.render('campgrounds/edit.ejs', { campground })
}

module.exports.updateCampground = async (req, res, next) => {
    const { id } = req.params
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground }, { new: true })
    req.flash('success', 'Successfully updated a campground!');
    res.redirect(`/campgrounds/${campground.id}`)
}

module.exports.deleteCampground = async (req, res, next) => {
    const { id } = req.params
    const campground = await Campground.findByIdAndDelete(id)
    req.flash('success', 'Successfully deleted a campground!');
    res.redirect(`/campgrounds`)
}