const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid')
const methodOverride = require('method-override')

let commentData = [
    {
        id: uuid(),
        username: "Todd",
        comment: "Lol that is so funny"
    },
    {
        id: uuid(),
        username: "Susan",
        comment: "I like cupcakes"
    },
    {
        id: uuid(),
        username: "Jess",
        comment: "Kittens are cute"
    },
    {
        id: uuid(),
        username: "Mike",
        comment: "Thats weird"
    }
]

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))
app.use(methodOverride('_method'))

app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', { commentData })
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    commentData.push({ username, comment, id: uuid() })
    res.redirect('/comments')
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs', { commentData })
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const comment = commentData.find((c) => { if (c.id == id) { return c } })
    res.render('comments/show.ejs', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const comment = commentData.find((c) => { if (c.id == id) { return c } })
    res.render('comments/edit.ejs', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const foundComment = commentData.find((c) => { if (c.id == id) { return c } })
    const newCommentText = req.body.comment
    foundComment.comment = newCommentText
    res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params
    commentData = commentData.filter((c) => { if (c.id !== id) { return c } })
    res.redirect('/comments')
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