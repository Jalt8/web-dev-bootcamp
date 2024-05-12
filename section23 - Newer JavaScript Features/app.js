//Default Params
// function rollDie(numSides){
//     if (numSides === undefined){
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function greeting(person, msg = "Hey there") {
    console.log(`${msg}, ${person}!`)
}

//SPREAD ...
const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456]
console.log(Math.max(...nums))

const cats = ["Blue", "Scout", "Rocket"]
const dogs = ["Rusty", "Wyatt"]

const allPets = [...cats, ...dogs]
console.log(allPets)

const feline = {legs: 4, family: "Felidae"}
const canine = {isFurry: true, family: "Caninae"}

const catDog = {...feline, ...canine}

const dataForm = {
    email: "blueman@gmail.com",
    password: "tobias123!",
    username: "tfunke"
}

const newUser = {...dataForm, id: 2345, isAdmin: false}

function testArg() {
    console.log(arguments)
}

//REST ARRAYS
function testRest(...rest) {
    console.log(rest)
}

function sum(...nums){
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold,silver, ...everyoneElse){
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

const scores = [929321, 899341, 888336, 772739, 673463, 343435]

const highScore = scores[0];
const secondHighScore = scores[1]

const [gold, silver, bronze, everyoneElse] = scores

const user = {
    emial: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politocian and the first openly',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

//const firstName = user.firstName;
//const { firstName } = user;
//const lastName = user.lastName;
//const { lastName } = user;
//const email = user.email;
//const { email } = user;

const {email, firstName, lastName, city, bio } = user
const {born:birthYear, died:deathYear = 'N/A'} = user

function fullName(user){
    return `${user.firstName} ${user.lastName}`
}