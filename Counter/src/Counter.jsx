import React from "react";
import { useState } from "react";

export const Counter = () =>{
    const [count, setCount] = useState(0)
    const increment = () =>{
        setCount((count) =>count+1)
    }
    const decrement = () =>{
        setCount((count) =>count-1)
    }
return (
    <>
    <h2>Counter App</h2>

    <h3>Count: {count}</h3>
    <div className="button">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
    
    </>
)
}