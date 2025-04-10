import HOC from "./HOC"

const UserRole = ({isLoggedIn})=>{
    return (
        <div>
            <h2>User Role...</h2>
            <span>{isLoggedIn?'User LoggedIn Successfully':"User Unauthorized"}</span>
        </div>
    )
}

export default HOC(UserRole)