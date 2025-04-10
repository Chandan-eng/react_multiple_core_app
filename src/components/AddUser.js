import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "./UserList";

const AddUser=()=>{
    const user=useSelector((state)=>state.user)
    const [name,setName]=useState('');
    const [username,setUsername]=useState('');
    const dispatch=useDispatch();
    console.log('AddUser render',user);
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({
            type: 'ADD_USER',
            payload: {
                id: user.length+1,
                name: name,
                username: username
            }
        })
        setName('');
        setUsername('');        

    }


    return(
        <div>
            <div>
                <h1>User List</h1>
           <UserList/>
            </div>
            <div className="container mt-4">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-3">Add User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Add User
          </button>
        </form>
      </div>
    </div>
    
        </div>
    )
}

export default AddUser;