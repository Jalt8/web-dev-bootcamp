const inputUsername = document.querySelector('#username')
const inputTweet = document.querySelector('#tweet')
const tweetButton = document.querySelector('button')
const ul = document.querySelector('ul')

tweetButton.addEventListener('click', function(e){
    e.preventDefault()
    let newLi = document.createElement('li')
    newLi.innerHTML = `<b>${inputUsername.value}</b> - ${inputTweet.value}`
    ul.appendChild(newLi)
    inputUsername.value = ''
    inputTweet.value = ''
})

ul.addEventListener('click',function(e){
    e.target.closest('LI').remove();
})