const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const Campground = require('./models/campground')
const methodOverride = require('method-override')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    }).catch(err => {
        console.log("OH NO MONGO sCONNECTION ERROR!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.listen(3000, () => {
    console.log("RUNNING ON PORT 3000!")
})

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find()
    res.render("index.ejs", { campgrounds })
})

app.get('/campgrounds/new', async (req, res) => {
    res.render("new.ejs")
})

app.get('/campgrounds/:id', async (req, res) => {
    const { id } = req.params
    const campground = await Campground.findById(id)
    res.render('show.ejs', { campground })

})

app.get("/products/:id", async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    console.log(product)
    res.render('products/show', { product })
})

app.post('/campgrounds', async (req, res) => {
    console.log(req.body)
    const newCampground = new Campground(req.body)
    await newCampground.save()
    res.redirect(`campgrounds/${newCampground.id}`)
})

app.put('', async (req, res) => {

})

app.delete('', async (req, res) => {

})