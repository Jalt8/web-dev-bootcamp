//Section 21 - Leveling Up Our Functions
//Function Scope

let bird = "Scarlet Mcaw";
function birdWatch(){
    let bird = "Great Blue Heron"
    console.log(bird);
}

//Block Scope
let radius = 8;
if (radius > 0){
    const PI = 3.14159;
    let msg = "HIII!"
}

console.log(radius)

//Lexical Scope
function bankRobbery(){
    const heroes = ["Spiderman","Wolverine", "Black Panther", "Batwoman"]
    function cryForHelp(){
        for (let hero of heroes){
            console.log(`PLEASE HELP US ${hero.toUpperCase()}`)
        }
    }
    cryForHelp()
}

//Function Expressions
const square = function(num){
    return num * num;
}

console.log(square(7));

//Higher Order Functions
function callTwice(func){
    func();
    func();
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie)

//Returning Functions
function makeMysteryFunc(){
    const rand = Math.random()
    if (rand > 0.5){
        return function() {
            console.log("CONGRATS, I AM A GOOD FUNCTION!");
            console.log("YOU WIN A MILLION DOLLARS!!");
        }
    } else {
        return function(){
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }
    }
}

function makeBetweenFunc(min, max){
    return function (num) {
        return num >= min && num <= max;
    }
}

//Defining Methods
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num
    },
    cube: function (num) {
        return num * num * num
    }
}

const myMathShort = {
    PI: 3.14159,
    square(num) {
        return num * num
    },
    cube(num) {
        return num * num * num
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log(`${this.name} says MEOWWWW`)
    }
}



try {
    hello.toUpperCase();
} catch {
    console.log("code error!")
}

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch(e) {
        console.log(e)
        console.log("Please pass a string next time!")
    }
}