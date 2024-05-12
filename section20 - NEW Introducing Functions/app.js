function grumpus() {
    console.log('ugh... you again...');
    console.log('for the last time...');
    console.log('LEAVE ME ALONE!!!');
}

function greet(firstName,lastName){
    console.log(`first name is ${firstName}, last name is ${lastName}`)
}

function repeat(word,amount){
    let new_word = ""
    for(let i=0; i < amount; i++){
        new_word += word
    }
    console.log(new_word)
}

function sum(x, y){
    let sum = x + y;
    return sum;
}

function sumArray(arr){
    let total = 0
    for(let i = 0; i < arr.length; i++){
        console.log(i)
        total += arr[i]
    }
    return total
}
