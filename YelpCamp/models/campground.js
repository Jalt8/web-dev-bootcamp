const mongoose = require('mongoose');
const Review = require('./review');

const CampgroundSchema = new mongoose.Schema(
    {
        title: String,
        image: String,
        price: Number,
        location: String,
        description: String,
        author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        reviews: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }]
    }
)

CampgroundSchema.post('findOneAndDelete', async function (campground) {
    if (campground) {
        await Review.deleteMany({ _id: { $in: campground.reviews } });
    }
});

module.exports = mongoose.model('Campground', CampgroundSchema)