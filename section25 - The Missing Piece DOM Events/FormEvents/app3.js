const input = document.querySelector('input')

input.addEventListener('input', function(e){
    let text = input.value
    let h1 = document.querySelector('h1')
    h1.innerText = text
})