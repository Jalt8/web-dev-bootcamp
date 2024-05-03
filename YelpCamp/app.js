const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
// const Product = require('./models/product')
const methodOverride = require('method-override')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.listen(3000, () => {
    console.log("RUNNING ON PORT 3000!")
})

app.get('/yelpcamp', async (req, res) => {
    res.render("home.ejs")
})

app.post('', async (req, res) => {
    
})

app.put('', async (req, res) => {
    
})

app.delete('', async (req, res) => {
    
})