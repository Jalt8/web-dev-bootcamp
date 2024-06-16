import { useState } from "react"

export default function ToggleCounter() {
    const [isHappy, setHappy] = useState(true)
    const [count, setCount] = useState(0)
    const toggleHappy = () => {
        setHappy( !isHappy )
    }
    const increment = () => {
        setCount(count + 1)
    }
    const toggle = () => {
        toggleHappy()
        increment()
    }
    return (
        <div>
            <h1>{isHappy ? ':)' : ':('}</h1>
            <h2>Count: {count}</h2>
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}