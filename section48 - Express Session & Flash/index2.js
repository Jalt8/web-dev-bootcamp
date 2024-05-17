const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Farm = require('./models/farm');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const flash = require('connect-flash');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    }).catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!");
        console.log(err);
    });

app.engine("ejs", ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};
app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    next();
});

const categories = ["fruit", "vegetable", "dairy"];

//FARM ROUTES

app.get("/farms/new", (req, res) => {
    res.render('farmstand/farms/new');
});

app.get("/farms/:id", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('farmstand/farms/show', { farm });
});

app.get("/farms", async (req, res) => {
    const farms = await Farm.find({});
    res.render('farmstand/farms/index', { farms });
});

app.post("/farms", async (req, res) => {
    console.log(req.body.farm);
    const farm = new Farm(req.body.farm);
    await farm.save();
    req.flash('success', 'Successfully made a new farm!');
    res.redirect(`farms/${farm.id}`);
});

app.get("/farms/:id/edit", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    console.log(farm);
    res.render('farmstand/farms/edit', { farm });
});

app.delete("/farms/:id", async (req, res) => {
    const { id } = req.params;
    await Farm.findByIdAndDelete(id);
    res.redirect(`/farms`);
});

app.put("/farms/:id", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findByIdAndUpdate(id, req.body.farm, { runValidators: true, new: true });
    res.redirect(`/farms/${farm.id}`);
});

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!");
});
