const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
    {
        body: { type: String },
        rating: { type: Number },
        campground: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Campground'
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)

module.exports = mongoose.model('Review', ReviewSchema)