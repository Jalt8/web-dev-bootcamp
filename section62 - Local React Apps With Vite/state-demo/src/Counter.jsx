import { useState } from "react";

export default function Counter() {
    console.log("Counter component rendered");
    const increment = () => {
        setCount(count + 1);
    };
    const increment3 = () => {
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);
    };
    const setToTen = () => {
        setCount((currentCount) => currentCount = 10);
    };
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>The count is: {count}</h1>
            <button onClick={increment}>Increment +1</button>
            <button onClick={increment3}>Increment +3</button>
            <button onClick={setToTen}>Set To Ten</button>
        </div>
    );
}