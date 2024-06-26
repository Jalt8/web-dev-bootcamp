const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        lowercase: true,
        enum: ["fruit", "vegetable", "dairy"]
    },
    farm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farm'
    }
})

const Product = new mongoose.model("Product", productSchema)

module.exports = Product