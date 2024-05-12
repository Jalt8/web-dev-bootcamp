const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    }).catch(err => {
        console.log("OH NO CONNECTION ERROR!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: [0, "Price can't be less than zero"]
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String]
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})

productSchema.methods.greet = function () { 
    console.log("Hello!!! Hi!!! Howdy!!!")
    console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function () { 
    this.onSale = !this.onSale
    this.save()
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, {price: 0, onSale: true})
}

const Product = mongoose.model("Product", productSchema)

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: "Bike Pump"})
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
}

findProduct()

Product.fireSale().then(res => console.log(res))

// const bike = new Product({ name: "Bike Pump", price: 19.99, categories: ["Cycling"] })

// bike.save()
//     .then(data => {
//         console.log("IT WORKED!!!")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("OH NO ERROR")
//         console.log(err)
//     })

// Product.findOneAndUpdate({ name: "Bike Pump" }, { price: 19.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("IT WORKED!!!")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("OH NO ERROR")
//         console.log(err)
//     })