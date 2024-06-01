const mongoose = require('mongoose');
const Review = require('./review');

const ImageSchema = new mongoose.Schema({
    url: String,
    filename: String
});

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});

const CampgroundSchema = new mongoose.Schema(
    {
        title: String,
        images: [ImageSchema],
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