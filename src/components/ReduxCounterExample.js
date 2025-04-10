import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,reset } from "../Redux/counterSlice";

const ReduxCounterExample=()=>{
    const count=useSelector(state=>state.count)
    const dispatch=useDispatch()
    console.log(count)
    return(
        <>
        <h1>Redux Example</h1>
        <span>count:{count}</span>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>

        </>
    )
}

export default ReduxCounterExample;