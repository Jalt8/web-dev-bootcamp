const btn = document.querySelector("#v2")

btn.onclick = function(){
 console.log('Hi')
}

function scream() {
    console.log("Aaaaaaaahhhh")
}

btn.onmouseenter = scream

let btn3 = document.querySelector("#v3")

btn3.addEventListener("click", function (){
    console.log("Not mE")
})

let tas = document.querySelector("#tas")

function twist(){
    console.log("Twist")
}

function shout(){
    console.log("Shout")
}

tas.addEventListener("click", () => {
    twist()
    shout()
})