const mongoose = require('mongoose')
const Product = require('./product')

const farmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: String,
    email: {
        type: String,
        required: [true, 'Email required!']
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

farmSchema.post('findOneAndDelete', async function(farm) {
    if (farm && farm.products && farm.products.length > 0) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } });
        console.log(res)
    }
    console.log("POST")
})

const Farm = new mongoose.model("Farm", farmSchema)

module.exports = Farm