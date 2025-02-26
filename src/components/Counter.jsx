import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        console.log("count incremented : ", count + 1);
        setCount(count + 1);
    }
    const handleDecrement = () => {
        console.log("count decremented : ", count - 1);
        setCount(count - 1);
    }
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <h1>Count: { count }</h1>
        </div>
    );
}

//  previous state
// current state 
// next state