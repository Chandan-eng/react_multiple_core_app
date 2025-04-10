import { useNavigate } from "react-router-dom"

const Login=()=>{
    const nav=useNavigate();
    const handleLogout=()=>{
        nav('/login');
    }
    return(
        <>
        <h1>Login Dashboard...</h1>
        <button onClick={handleLogout}>Log In</button>
        </>
    )
}

export default Login;