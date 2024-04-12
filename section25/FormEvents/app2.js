let form = document.querySelector("form")
let input = document.querySelector('input')

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("SUBMITTED!!");
    console.dir(e)
    console.dir(input)
    let newCat = document.createElement("li")
    newCat.innerText = input.value
    let ul = document.querySelector('ul')
    ul.appendChild(newCat)
})