const express = require('express')
const app = express()
const morgan = require("morgan")
const AppError = require('./AppError')

// app.use(morgan('tiny'))

app.use((req, res, next) => {
    console.log(req.method.toUpperCase(), req.path)
    return next();
})

const verifyPassword = ((req, res, next) => {
    const { password } = req.query
    console.log(req.query)
    if (password === "chickennugget") {
        next()
    } else {
        // res.send("SORRY YOU NEED A PASSWORD!")
        //res.status(401)
        throw new AppError("SORRY YOU NEED A PASSWORD!", 401)
    }
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS")
    return next();
})

app.get('/', (req, res) => {
    res.send('HOME PAGE!!')
})

app.get('/error', (req, res) => {
    chicken.fly()
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('Sometimes i wear headphones to be left alon in public')
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin', 403)
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND')
})

// app.use((err, req, res, next) => {
//     console.log('**************************************')
//     console.log('*****************ERROR****************')
//     console.log('**************************************')
//     console.log(err)
//     next(err)
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong' } = err
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log("App running on localhost:3000")
})