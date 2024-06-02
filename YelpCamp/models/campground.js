const mongoose = require('mongoose');
const Review = require('./review');

const ImageSchema = new mongoose.Schema({
    url: String,
    filename: String
});

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});

const opts = { toJSON: { virtuals: true } };

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
        }],
        geometry: {
            type: {
                type: String,
                enum: ['Point'],
                required: true
            },
            coordinates: {
                type: [Number],
                required: true
            }
        }
    }, opts
)

CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
    return `<strong><a href="/campgrounds/${this._id}">${this.title}</a><strong>
    <p>${this.description.substring(0, 20)}...</p>`;
});

CampgroundSchema.post('findOneAndDelete', async function (campground) {
    if (campground) {
        await Review.deleteMany({ _id: { $in: campground.reviews } });
    }
});

module.exports = mongoose.model('Campground', CampgroundSchema)