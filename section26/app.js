let gameMaxScore = 0
let playerOneScore = 0
let playerTwoScore = 0
const playerOneButton = document.querySelector('#btnP1')
const playerTwoButton = document.querySelector('#btnP2')
const resetButton = document.querySelector('#btnReset')
const P1Score = document.querySelector('#P1Score')
const P2Score = document.querySelector('#P2Score')
const selectScore = document.querySelector('select')

resetButton.addEventListener('click', function (e) {
    gameMaxScore = 0
    playerOneScore = 0
    playerTwoScore = 0
    P1Score.innerText = '0'
    P2Score.innerText = '0'
    selectScore.value = '1'
    gameWon()
    console.log(`gameMaxScore:${gameMaxScore}, playerOneScore:${playerOneScore}, playerTwoScore:${playerTwoScore}`)
})

playerOneButton.addEventListener('click', function (e) {
    playerOneScore += 1
    P1Score.innerText = `${playerOneScore}`
    gameWon()
    console.log(`gameMaxScore:${gameMaxScore}, playerOneScore:${playerOneScore}, playerTwoScore:${playerTwoScore}`)
})

playerTwoButton.addEventListener('click', function (e) {
    playerTwoScore += 1
    P2Score.innerText = `${playerTwoScore}`
    gameWon()
    console.log(`gameMaxScore:${gameMaxScore}, playerOneScore:${playerOneScore}, playerTwoScore:${playerTwoScore}`)

})

function gameWon() {
    gameMaxScore = parseInt(selectScore.value)
    console.dir(selectScore)
    console.dir(P1Score)
    if (parseInt(P1Score.innerText) == parseInt(gameMaxScore)) {
        console.log("Player 1 Won")
        P1Score.style.color = 'green'
        P2Score.style.color = 'red'
        playerOneButton.disabled = true
        playerTwoButton.disabled = true
    } else if (parseInt(P2Score.innerText) == parseInt(gameMaxScore)) {
        console.log("Player 2 Won")
        P2Score.style.color = 'green'
        P1Score.style.color = 'red'
        playerOneButton.disabled = true
        playerTwoButton.disabled = true
    } else {
        P1Score.style.color = ''
        P2Score.style.color = ''
        playerOneButton.disabled = false;
        playerTwoButton.disabled = false;
    }
}