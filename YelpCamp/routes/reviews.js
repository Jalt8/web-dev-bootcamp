const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/catchasync');
const AppError = require('../utils/AppError');
const Campground = require('../models/campground');
const Review = require('../models/review');
const { campgroundSchema, reviewSchema } = require('../schemas');
const middleware = require('../utils/middleware');


const { isLoggedIn, validateReview, isAuthor } = middleware;

router.delete('/:reviewId', isLoggedIn, isAuthor, wrapAsync(async (req, res, next) => {
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
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', 'Successfully added a new review!');
    res.redirect(`/campgrounds/${campground.id}`);
}));

module.exports = router;