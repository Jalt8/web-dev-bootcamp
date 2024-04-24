const express = require('express');
const app = express();
const path = require('path');

const commentData = [
    {
        username: "Todd",
        comment: "Lol that is so funny"
    },
    {
        username: "Susan",
        comment: "I like cupcakes"
    },
    {
        username: "Jess",
        comment: "Kittens are cute"
    },
    {
        username: "Mike",
        comment: "Thats weird"
    }
]

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', { commentData })
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    console.log(req.body)
    const { meat, qty } = req.body
    res.send(`Ok, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})