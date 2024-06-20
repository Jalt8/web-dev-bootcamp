import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('John');
    function increment() {
        setCount(count => count + 1);
    }
    useEffect(function myEffect() {
        console.log('useEffect ran');
        document.title = `Count: ${count}`;
    }, [count])
    function updateName(evt) {
        setName(evt.target.value);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <input type="text" name="name" id="name" value={name} onChange={updateName}/>
        </div>
    );
}