const express = require('express')
const app = express()
const morgan = require("morgan")

// app.use(morgan('tiny'))

app.use((req, res, next) => {
    console.log(req.method.toUpperCase(), req.path)
    return next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS")
    return next();
})

app.get('/', (req, res) => {
    res.send('HOME PAGE!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!!')
})

app.use((req, res) => {
res.status(404).send('NOT FOUND')
})

app.listen(3000, () => {
    console.log("App running on localhost:3000")
})