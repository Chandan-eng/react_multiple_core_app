import { useState } from "react";
import WrapAuth from './WrapAuth';

const User=({isLogging})=>{
    // const [userLoggedIn, setUserLoggedIn] = useState(false);
    return (<div>
        <h1>User Component</h1>
        {/* <button onClick={()=>setUserLoggedIn(!userLoggedIn)}>{userLoggedIn?'Logout':'Login'}</button> */}
        {isLogging && <h2>User Logged In</h2>}
    </div>)
}

export default WrapAuth(User);