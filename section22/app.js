//forEach
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


numbers.forEach(function (element) {
    if (element % 2 === 0) {
        console.log(element)
    }
})

for (let el of numbers) {
    console.log(el)
}

//map
const doubles = numbers.map(function (num) {
    return num * 2
}
)

//arrow functions
//const add = (x, y) => {
//    return x + y;
//}


const square = (x) => {
    return x * x
}

//implicit returns
const add = (x, y) => x + y

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

//setTimeout
setTimeout(() => {
    console.log("Hello!!!")
}, 3000)

const id = setInterval(() => {
    console.log(Math.random())
}, 2000)

//Filter
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]
const odds = nums.filter(n => {
    return n % 2 === 1;
})
console.log(odds)

const smallNums = nums.filter(n => n < 5);
console.log(smallNums)

//some
const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

//are there any words longer than 4 characters
//true
words.some(word => {
    return word.length > 4
})

//do any words start with Z
//false
words.some(word => {
    return word[0] === 'z'
})

//do any of the words contain cake
true
words.some(w => w.includes('cake'))

//EVERY
//true
const new_words = ["dog", "dig", "log", "bag", "wag"]

new_words.every(word => {
    return word.length === 3;
})

//false
new_words.every(word => word[0] === 'd')

//true
new_words.every(w => {
    let last_letter = w[w.length - 1];
    return last_letter === 'g'
})

//REDUCE
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices){
//     total += price
// }
// console.log(total)

const total = prices.reduce((total, price) => {
    return total + price
})

const min = prices.reduce((min, price) => {
    if (min > price){
        min = price
    }
    return min
})

console.log(total)
console.log(min)