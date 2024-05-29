const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/catchasync');
const AppError = require('../utils/AppError');
const Campground = require('../models/campground');
const { campgroundSchema, reviewSchema } = require('../schemas');
const middleware = require('../utils/middleware');
const campgrounds = require('../controllers/campgrounds');


const { isLoggedIn, isAuthor, validateCampground } = middleware;

router.get('/new',isLoggedIn, wrapAsync(campgrounds.renderNewForm))

router.route('/')
    .get(wrapAsync(campgrounds.index))
    .post(isLoggedIn, validateCampground, wrapAsync(campgrounds.createCampground));

router.route('/:id')
    .get(wrapAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, validateCampground, wrapAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor, wrapAsync(campgrounds.deleteCampground));


router.get('/:id/edit', isLoggedIn, wrapAsync(campgrounds.renderEditForm))


module.exports = router;