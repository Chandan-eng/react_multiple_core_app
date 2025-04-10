import { useRef } from "react";

export const UseRef=()=>{
    const inputRef=useRef(null);
    return (
        <div>
            <h1>UseRef Component</h1>
            <input type="text" placeholder="Enter Text" ref={inputRef}/>
            <button onClick={()=>inputRef.current.focus()}>Focus Input</button>
        </div>
    )
}