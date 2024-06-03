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
            images: [
                {
                  url: 'https://res.cloudinary.com/dofdwsngd/image/upload/v1717163942/YelpCamp/efotoqk46jlce8vkolyc.jpg',
                  filename: 'YelpCamp/efotoqk46jlce8vkolyc',
                },
                {
                  url: 'https://res.cloudinary.com/dofdwsngd/image/upload/v1717163945/YelpCamp/gg13k05qv7nfpml8i03n.jpg',
                  filename: 'YelpCamp/gg13k05qv7nfpml8i03n',
                }
              ],
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia impedit voluptate earum repudiandae inventore distinctio beatae assumenda officiis veritatis ratione deleniti repellendus non tenetur dignissimos debitis, praesentium accusamus consectetur minima',
            price: 5 + Math.floor(Math.random() * 100),
            author: '664db39efd835b7720587481',
            //author: '665ce23636dc286ecdcbaece',
            geometry: { type: 'Point', coordinates: [cities[random1000].longitude, cities[random1000].latitude] }
        })
        await camp.save()
    }
}

seedDB().then(() => { mongoose.connection.close() })