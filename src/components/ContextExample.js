import { createContext, useContext } from "react";

const ColorContext=createContext();

const Child=()=>{
    const useColorContext=useContext(ColorContext);
    return (
        <div>
            color:{useColorContext}
        </div>
    )
}

const ContextExample=()=>{
    return (
        <ColorContext.Provider value='red'>
            <h3>Color context example...</h3>
            <Child/>
        </ColorContext.Provider>
    )
}

export default ContextExample;