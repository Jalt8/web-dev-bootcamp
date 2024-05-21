const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/catchasync');
const AppError = require('../utils/AppError');
const Campground = require('../models/campground');
const Review = require('../models/review');
const { campgroundSchema, reviewSchema } = require('../schemas');
const middleware = require('../middleware');


const { isLoggedIn } = middleware;

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    console.log(error)
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        return next(new AppError(msg, 400));
    } else {
        next();
    }
}

router.delete('/:reviewId', isLoggedIn, wrapAsync(async (req, res, next) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Successfully deleted review!');
    res.redirect(`/campgrounds/${id}`);
}));

router.post('/', isLoggedIn, validateReview, wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    console.log(req.params);
    const campground = await Campground.findById(id);
    if (!campground) {
        return next(new AppError('Campground Not Found', 404));
    }
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', 'Successfully added a new review!');
    res.redirect(`/campgrounds/${campground.id}`);
}));

module.exports = router;