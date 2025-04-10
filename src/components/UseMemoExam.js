import { useMemo, useState } from "react";

const UseMemoExam = () => {
    const [result, setResult] = useState(0);

    const factorial = (num)=>{
        console.log('factorial called')
        return num<=1?1:num*factorial(num-1)
    }

    const value = useMemo(() => {
        return factorial(result);
    }, [result]);
    const handleSecondButton = () => {
        setResult(5);
    }
    return (
        <div>
        <input value={value}  />
        <button onClick={()=>setResult(prev=>prev+1)}>click2</button>
        <button onClick={handleSecondButton}>click2</button>
        </div>
    );
    }

    export default UseMemoExam;