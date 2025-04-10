import { useMemo, useState } from "react";

const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    // Function to calculate factorial
    const factorial = (n) => {
        console.log("Factorial function called");
        return n <= 0 ? 1 : n * factorial(n - 1);
    };

    // Memoize the factorial computation
    const memoizedFactorial = useMemo(() => factorial(number), [number]);
    const counterUpdate=()=>{
        setCounter(counter+1)
        setNumber(5)
    }

    return (
        <div>
            <h1>UseMemo Example</h1>
            <h2>Factorial of {number} is {memoizedFactorial}</h2>
            <h2>Counter: {counter}</h2>
            
            {/* Properly update state */}
            <input
                type="text"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <button onClick={counterUpdate}>Increment</button>
        </div>
    );
};

export default UseMemo;
