import { useDispatch, useSelector } from "react-redux";
import { decrement,increment, incrementByAmount, reset } from "../reduxtoolkitExample/counterSlice";

const UseReduxToolkit=()=>{
    const count=useSelector((state)=>state.counter)
    const dispatch=useDispatch();
    console.log('UseReduxToolkit render',count);
    return (
        <div>
            <h1>UseReduxToolkit</h1>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>Increment By Value 5</button>
        </div>
    )
}

export default UseReduxToolkit;