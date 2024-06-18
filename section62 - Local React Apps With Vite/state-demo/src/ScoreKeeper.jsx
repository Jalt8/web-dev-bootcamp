import { useState } from "react";

function ScoreKeeper() {
    const [scores, setScore] = useState({player1: 0, player2: 0})
    function increasePlayer1() {
        setScore(prevScore => {
            return { ...prevScore, player1: prevScore.player1 + 1 }
        })
    }
    function increasePlayer2() {
        setScore(prevScore => {
            return { ...prevScore, player2: prevScore.player2 + 1 }
        })
    }
    return(
        <div>
            <p>Player 1: {scores.player1}</p>
            <p>Player 2: {scores.player2}</p>
            <button onClick={increasePlayer1}>+1 Player 1</button>
            <button onClick={increasePlayer2}>+1 Player 2</button>
        </div>
    )
}

export default ScoreKeeper;