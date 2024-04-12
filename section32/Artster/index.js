const figlet = require('figlet')
const colors = require('colors')

console.dir(figlet)

figlet('Hello  Adelein  my  love  ; )', function(err, data) {
    if(err){
        console.log('Something went wrong...')
        console.dir(err)
        return
    }
    console.log(data.rainbow)
});

figlet('i  tink  you  really  cute ', function(err, data) {
    if(err){
        console.log('Something went wrong...')
        console.dir(err)
        return
    }
    console.log(data.rainbow)
});

figlet('nd  i  just  wanted  to  say  i  love  you', function(err, data) {
    if(err){
        console.log('Something went wrong...')
        console.dir(err)
        return
    }
    console.log(data.rainbow)
});