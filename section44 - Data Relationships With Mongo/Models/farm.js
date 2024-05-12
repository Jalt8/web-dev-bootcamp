const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    }).catch(err => {
        console.log("OH NO MONGO sCONNECTION ERROR!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})

const Product = mongoose.model('Product', productSchema)

// Product.insertMany([
//     {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
//     {name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer'},
//     {name: 'Asparagus', price: 3.99, season: 'Spring'}
// ])

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

const Farm = mongoose.model('Farm', farmSchema)

const addFarm = async () => {
    const newFarm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, Ca' })
    const melon = await Product.findOne({ name: 'Goddess Melon' })
    newFarm.products.push(melon)
    newFarm.save()
    console.log(newFarm)
}

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' })
    const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon' })
    farm.products.push(watermelon)
    farm.save()
    console.log(farm)
}

Farm.findOne({ name: 'Full Belly Farms' }).populate('products').then(farm => console.log(farm))