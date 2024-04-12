let button = document.querySelector("button")

button.addEventListener("click", (evt) => {
    console.log(evt)
    alert("Test")
})

let input = document.querySelector("input")
input.addEventListener("keydown", (e) => {
    console.log("KeyDown")
    console.log(e)
})

// input.addEventListener("keyup", () => {
//     console.log("KeyUp")
// })

window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!")
            break;
        case 'ArrowDown':
            console.log("DOWN!")
            break;
        case 'ArrowLeft':
            console.log("LEFT!")
            break;
        case 'ArrowRight':
            console.log("RIGHT!")
            break;
        default:
            console.log("IGNORED")
            break;
    }
})