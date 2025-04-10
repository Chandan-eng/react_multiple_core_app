import { createContext, useContext } from "react";
const UserContext=createContext();

const Child=()=>{
    const userContext= useContext(UserContext)
    return(
        <div>
            <p>Child Component {userContext}</p>
        </div>
    )
}

const UseContext=()=>{
    return(
        <UserContext.Provider value='Hello from Context'>
            <div>
                <h1>UseContext Component</h1>
                <Child/>
            </div>
        </UserContext.Provider>
    )
}

export default UseContext;