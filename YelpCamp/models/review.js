const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
    {
        body: { type: String },
        rating: { type: Number },
        campground: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Campground'
        }
    }
)

module.exports = mongoose.model('Review', ReviewSchema)