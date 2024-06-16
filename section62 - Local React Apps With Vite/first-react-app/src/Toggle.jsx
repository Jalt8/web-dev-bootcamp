import { useState } from "react"

export default function Toggle() {
    const [isHappy, setHappy] = useState(true)
    const toggleHappy = () => {
        setHappy( !isHappy )
    }
    return (
        <div>
            <h1>{isHappy ? ':)' : ':('}</h1>
            <button onClick={toggleHappy}>Toggle</button>
        </div>
    )
}