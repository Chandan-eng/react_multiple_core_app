import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/counterSlice";

const UseRedux=()=>{
    const counter=useSelector((state)=>state.count)
    const dispatch =useDispatch();
    console.log('UseRedux render',counter);
    return (
        <div>
            <h1>Use Redux</h1>
            <h2>{counter}</h2>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default UseRedux;