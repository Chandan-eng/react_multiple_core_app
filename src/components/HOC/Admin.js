import { useState } from "react";
import WrapAuth from './WrapAuth';

const Admin=({isLogging})=>{
    // const [adminLogin,setAdminLogin]=useState(false);
    console.log('Admin Rendered',isLogging);
    return(
        <div>
            <h1>Admin</h1>
            {/* <button onClick={()=>setAdminLogin(!adminLogin)}>{adminLogin?'Logout':'Login'}</button> */}
            {isLogging && <h2>Admin Logged In</h2>}
        </div>
    )
}

export default WrapAuth(Admin);