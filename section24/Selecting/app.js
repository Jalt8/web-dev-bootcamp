const allImages = document.getElementsByTagName('img')

for (let img of allImages){
    console.log(img.src)
    //img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}

console.dir(allImages)

const squareImages = document.getElementsByClassName('square')
console.dir(squareImages)
for (let img of squareImages){
    console.log(img.src)
    //img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}

//querySelector
console.dir(document.querySelector('h1'))
console.dir(document.querySelector('a[title="Java"]'))

//querySelectorAll
console.dir(document.querySelectorAll("a"))