import { useCallback, useState } from "react";
import Comp1 from "./pureComponentEx/Comp1";

const UseCallBack=()=>{

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    const increment = useCallback(() => {
        console.log("Increment function called");
        setCount(prev=>prev + 1);
    },[]);

    // const increment = () => {
    //     console.log("Increment function called");
    //     setCount(prev=>prev + 1);
    // };

    return(
        <div>
            <h1>UseCallBack</h1>
            <button onClick={increment}>Count: {count}</button>
            <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
            <Comp1 counter1={count}/>
        </div>
    )
}

export default UseCallBack;