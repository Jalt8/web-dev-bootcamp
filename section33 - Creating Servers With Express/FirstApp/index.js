const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})

/* 
app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST")
    //res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE!!")
    //res.send({ color: 'red' })
    res.send("<h1>This is my webpage!</h1>")
})
*/
app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /CATS this is different to a GET REQUEST')
})

app.get('/r/:subreddit', (req, res) => {
    console.log(req.params)
    const { subreddit } = req.params
    console.log(subreddit)
    res.send(`<h1>BROWSING THE ${subreddit} SUBREDDIT!</h1>`)
})

app.get('/r/:subreddit/:postid', (req, res) => {
    console.log(req.params)
    const { subreddit } = req.params
    const { postid } = req.params
    console.log(subreddit)
    res.send(`<h1>BROWSING THE ${subreddit} SUBREDDIT ON POST ${postid}!</h1>`)
})

app.get('/cats', (req, res) => {
    console.log('CAT REQUEST!!!')
    res.send('MEOW!')
})

app.get('/dogs', (req, res) => {
    console.log('DOG REQUEST!!!')
    res.send('WOOF!')
})

app.get('/', (req, res) => {
    res.send('This is the home page!')
})

app.get('/search', (req, res) => {
    console.log(req.query);
    const { q } = req.query
    console.log(`Q:${q}`)
    if(!q) {
        res.send(`NOTHING FOUND IF NOTHING SEARCHED`)
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send("I don't know that path")
})

