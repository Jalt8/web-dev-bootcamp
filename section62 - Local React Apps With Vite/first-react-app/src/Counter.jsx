import { useState } from "react"

export default function Counter() {
    const increment = () => {
        setCount(count + 1)
    }
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>The count is: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}