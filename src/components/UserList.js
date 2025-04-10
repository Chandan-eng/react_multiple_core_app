import { useDispatch, useSelector } from "react-redux";

const UserList=()=>{
    const users=useSelector((state)=>state.user);
    const dispatch=useDispatch();
    return(
        <div className="container mt-4">
         <table className="card shadow  align-items-center" border={1} cellPadding={15} cellSpacing={0}>
            <thead>
                <tr style={{display: 'flex',gap: '10px'}}>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td style={{display: 'flex',gap: '10px'}}>
                                <button >Edit</button>
                                <button onClick={()=>{dispatch({ type: 'DELETE_USER', payload: user.id })}}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
         </table>
        </div>
    )
}
export default UserList;