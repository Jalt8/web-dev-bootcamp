import { useState } from "react";

function generateGameBoard(){
    console.log("Generating game board")
    return Array(5000)
}

export default function Dumbo() {
    const [gameBoard, setGameBoard] = useState(generateGameBoard)
    return <button onClick={() => setGameBoard("Hello!")}>Click me to change state</button>
}