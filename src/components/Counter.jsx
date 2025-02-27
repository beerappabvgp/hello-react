import { useState } from "react";
import { renderToString } from "react-dom/server";

export const Counter = () => {
    const [count, setCount] = useState(1);
    // here the count = 1
    const handleIncrement = () => {
        console.log("count incremented : ", count + 1);
        // 1 + 1
        setCount(count + 1);
        setCount(2);
        //  1 + 1
        setCount(count + 1);
        setCount(2);
        // 1 + 1
        setCount(count + 1);
        setCount(2);
    }


    const handleDecrement = () => {
        console.log("count decremented : ", count - 1);
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
    }
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <h1>Render Count: {count}</h1>
        </div>
    );
}

//  previous state
// current state 
// next state




// export const Counter = () => {
//     let count = 0;
//     const handleIncrement = () => {
//         console.log("count incremented : ", count + 1);
//         count = count + 1;
//     }
//     const handleDecrement = () => {
//         console.log("count decremented : ", count - 1);
//         count = count - 1;
//     }
//     return (
//         <div>
//             <button onClick={handleIncrement}>Increment</button>
//             <button onClick={handleDecrement}>Decrement</button>
//             <h1>Render Count: {count}</h1>
//         </div>
//     );
// }



// 
