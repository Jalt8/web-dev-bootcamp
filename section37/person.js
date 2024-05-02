const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/personApp')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    }).catch(err => {
        console.log("OH NO CONNECTION ERROR!")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName')
    .get(function () {
        return `${this.first} ${this.last}`
    })
    .set(function (v) {
        this.first = v.substr(0, v.indexOf(' '));
        this.last = v.substr(0, v.indexOf(' ') + 1);
    })

personSchema.pre('save', async function() {
    this.first = "YO";
    this.last = "MAMA"
    console.log("ABOUT TO SAVE!!!")
})

personSchema.post('save', async function() {
    console.log("JUST SAVED!!!")
})

const Person = mongoose.model('Person', personSchema)