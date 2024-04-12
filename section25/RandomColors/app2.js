let h1 = document.querySelector("h1")
let btn = document.querySelector("button")
let body = document.querySelector("body")

function getRandomColor() {
    // Generate random values for R, G, and B components between 0 and 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Create a CSS color string in the format "rgb(r, g, b)"
    const color = `rgb(${r}, ${g}, ${b})`;

    return color;
}

function changeColor(){
    let color = getRandomColor()
    body.style.backgroundColor = color
    h1.textContent = color
}

btn.addEventListener("click", changeColor)
