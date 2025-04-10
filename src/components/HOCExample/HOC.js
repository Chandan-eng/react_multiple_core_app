import { useState } from "react";

const HOC=(Comp)=>{
    return function AuthUser(){
        const [isLoggedIn,setIsLoggedIn]= useState(false);
        return (
            <div>
                <h1>HOC Example...</h1>
                {
                    isLoggedIn && <Comp isLoggedIn={isLoggedIn}/>
                }
                <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?'Log out':'Log In'}</button>
            </div>
        )
    }
}

export default HOC;