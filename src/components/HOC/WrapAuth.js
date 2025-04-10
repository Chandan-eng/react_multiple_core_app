import { useState } from "react";

const WrapAuth = (Component) => {
    return function Auth(){
        const [userLoggedIn, setUserLoggedIn] = useState(false);
        return (
        <div>
            <h1>User Component</h1>
            {userLoggedIn && <Component isLogging={userLoggedIn} />}
            <button onClick={() => setUserLoggedIn(!userLoggedIn)}>{userLoggedIn ? 'Logout' : 'Login'}</button>
        </div>
        )
    }
}

export default WrapAuth;