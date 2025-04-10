import { useCallback, useState } from "react";

const UseCallBackEx=()=>{
    const [count,setCount]=useState(0);
const increment=useCallback(()=>{
    console.log('Increment')
    setCount(count+1)
},[count])
const decrement=useCallback(()=>{
    console.log('Decrement')
    setCount(count-1)
},[count])
    return(
        <div>
            <h1>UseCallBackEx</h1>
            <span>Count:{count}</span>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default UseCallBackEx;