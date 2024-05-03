const mongoose = require('mongoose');

const CampgroundSchema = new mongoose.Schema(
    {
        title: String,
        price: String,
        location: String,
        description: String
    }
)

module.exports = mongoose.model('Campground', CampgroundSchema)