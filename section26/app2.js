const P1 = {
    score: 0,
    button: document.querySelector('#btnP1'),
    display: document.querySelector('#P1Score')
}

const P2 = {
    score: 0,
    button: document.querySelector('#btnP2'),
    display: document.querySelector('#P2Score')
}


let isGameOver = false
const resetButton = document.querySelector('#btnReset')
const selectScore = document.querySelector('select')

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === parseInt(selectScore.value)) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent
    }
}

resetButton.addEventListener('click', function (e) {
    isGameOver = false
    P1.score = 0
    P2.score = 0
    P1.display.innerText = '0'
    P2.display.innerText = '0'
    selectScore.value = '1'
})

P1.button.addEventListener('click', function (e) {
    updateScores(P1, P2)
})

P2.button.addEventListener('click', function (e) {
    updateScores(P2, P1)
})
