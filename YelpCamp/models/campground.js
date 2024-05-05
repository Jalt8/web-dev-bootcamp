const mongoose = require('mongoose');

const CampgroundSchema = new mongoose.Schema(
    {
        title: String,
        image: String,
        price: Number,
        location: String,
        description: String
    }
)

module.exports = mongoose.model('Campground', CampgroundSchema)