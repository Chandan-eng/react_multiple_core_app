import HOC from "./HOC"

const AdminRole=({isLoggedIn})=>{
    return (
        <div>
            <h2>Admin Role...</h2>
            <span>{isLoggedIn?'Admin LoggedIn Successfully':"User Unauthorized"}</span>
        </div>
    )
}

export default HOC(AdminRole)