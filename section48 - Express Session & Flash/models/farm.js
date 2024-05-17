const mongoose = require('mongoose')

const farmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: String,
    email: {
        type: String,
        required: [true, 'Email required!']
    }
})



const Farm = new mongoose.model("Farm", farmSchema)

module.exports = Farm