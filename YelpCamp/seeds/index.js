const mongoose = require('mongoose');
const Campground = require('../models/campground')
const methodOverride = require('method-override')
const cities = require('./cities')
const { places, descriptors } = require('./seedHelper')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    }).catch(err => {
        console.log("OH NO MONGO sCONNECTION ERROR!")
        console.log(err)
    })

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({})
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: `https://source.unsplash.com/collection/483251`,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia impedit voluptate earum repudiandae inventore distinctio beatae assumenda officiis veritatis ratione deleniti repellendus non tenetur dignissimos debitis, praesentium accusamus consectetur minima',
            price: 5 + Math.floor(Math.random() * 100)
        })
        await camp.save()
    }
}

seedDB().then(() => { mongoose.connection.close() })