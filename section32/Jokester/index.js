const jokes = require('give-me-a-joke')
const colors = require('colors')

console.dir(jokes)

// To get a random dad joke
jokes.getRandomDadJoke(function (joke) {
    console.log(String(joke).rainbow);
});