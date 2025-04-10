
import React, { useEffect, useRef, useState } from 'react';
const useThrottle=(value,delay)=>{
    const [throttledValue,setThrottledValue]=useState(value);
    const lastRan=useRef(Date.now());
    useEffect(()=>{
        const now=Date.now();
        if(now-lastRan.current>=delay){
            setThrottledValue(value);
            lastRan.current=now;
            console.log('useThrottle',value,delay);

        }
    },[value,delay])

    return throttledValue;
}

const UseThrottle=()=>{
    const [count,setCount]=useState(0);
    const throttleValue=useThrottle(count,1000);
    return (
        <div>
            <h1>UseThrottle</h1>
            <button onClick={()=>setCount(count+1)}>{`Click Me ${count}`} </button>
            <h2>{`Throttled Value: ${throttleValue}`}</h2>
        </div>
    )
}

export default UseThrottle;