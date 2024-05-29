const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/catchasync');
const AppError = require('../utils/AppError');
const Campground = require('../models/campground');
const Review = require('../models/review');
const { campgroundSchema, reviewSchema } = require('../schemas');
const middleware = require('../utils/middleware');
const reviews = require('../controllers/reviews');


const { isLoggedIn, validateReview, isAuthor, isReviewAuthor } = middleware;

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(reviews.deleteReview));

router.post('/', isLoggedIn, validateReview, wrapAsync(reviews.createReview));

module.exports = router;