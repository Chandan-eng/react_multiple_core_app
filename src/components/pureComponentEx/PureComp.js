import { useState } from "react"
import Comp1 from "./Comp1"
import Comp2 from "./Comp2"

const PureComp=()=>{
    console.log('Pure Component Rendered')
    const [counter1,setCounter1]=useState(0)
    const [counter2,setCounter2]=useState(0)
    const handleFirstStateUpdate=()=>{
        setCounter1(counter1+1)
    }
    const handleSecondStateUpdate=()=>{
        setCounter2(counter2+1)
    }
    return (
    <>
    <h1>Pure Component</h1>
    <div>
        <Comp1 counter1={counter1}/>
        <Comp2 counter2={counter2}/>
    </div>
    <div>
        <button onClick={handleFirstStateUpdate}>First State Update</button>
        <button onClick={handleSecondStateUpdate}>Second State Update</button>
    </div>
    </>
)
}

export default PureComp;