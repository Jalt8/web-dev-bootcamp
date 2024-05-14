const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const Product = require('./models/product')
const Farm = require('./models/farm')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    }).catch(err => {
        console.log("OH NO MONGO sCONNECTION ERROR!")
        console.log(err)
    })

app.engine("ejs", ejsMate)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const categories = ["fruit", "vegetable", "dairy"]

//FARM ROUTES

app.get("/farms/new", (req, res) => {
    res.render('farmstand/farms/new')
})

app.get("/farms/:id", async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findById(id).populate('products')
    res.render('farmstand/farms/show', { farm })
})

app.get("/farms", async (req, res) => {
    const farms = await Farm.find({})
    res.render('farmstand/farms/index', { farms })
})

app.post("/farms", async (req, res) => {
    // console.log(req.body)
    // const { name, price, category } = req.body
    // console.log(name, price, category)
    // const newProduct = new Product(req.body)
    // await newProduct.save()
    // res.redirect(`products/${newProduct.id}`)
    console.log(req.body.farm)
    const farm = new Farm(req.body.farm)
    await farm.save()
    res.redirect(`farms/${farm.id}`)
})

app.get("/farms/:id/edit", async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findById(id)
    console.log(farm)
    res.render('farmstand/farms/edit', { farm })
})

app.delete("/farms/:id", async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findByIdAndDelete(id)
    for (let productId of farm.products) {
        const product = await Product.findByIdAndDelete(productId)
    }
    res.redirect(`/farms`)
})

app.put("/farms/:id", async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findByIdAndUpdate(id, req.body.farm, { runValidators: true, new: true })
    res.redirect(`/farms/${farm.id}`)
})

app.get("/farms/:id/products/new", async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findById(id)
    res.render('farmstand/products/new', { categories, farm })
})

app.post("/farms/:id/products", async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findById(id)
    const product = new Product(req.body)
    farm.products.push(product)
    product.farm = farm
    await farm.save()
    await product.save()
    // res.send(farm)
    // console.log(req.body)
    // const { name, price, category } = req.body
    // console.log(name, price, category)
    // const newProduct = new Product(req.body)
    // await newProduct.save()
    res.redirect(`/farms/${farm.id}`)
})


//PRODUCT ROUTES

app.get("/products", async (req, res) => {
    const { category } = req.query
    if (category) {
        const products = await Product.find({ category: category })
        res.render('farmstand/products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('farmstand/products/index', { products, category: 'All' })
    }
})

app.post("/products", async (req, res) => {
    console.log(req.body)
    const { name, price, category } = req.body
    console.log(name, price, category)
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.redirect(`products/${newProduct.id}`)
})

app.get("/products/new", (req, res) => {
    res.render('farmstand/products/new', { categories })
})

app.get("/products/:id", async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    console.log(product)
    const farm = await Farm.findById(product.farm)
    res.render('farmstand/products/show', { product, farm })
})

app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    console.log(product)
    res.render('farmstand/products/edit', { product, categories })
})

app.put("/products/:id", async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/products/${product.id}`)
})

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndDelete(id)
    res.redirect(`/products`)
})


app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})