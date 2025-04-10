import { useReducer } from "react"

const users=[
    {
        name:'A',
        id:1,
        status:true
    },
    {
        name:'B',
        id:2,
        status:false
    }
]

const reducer=(state,action)=>{
    switch(action.type){
        case 'DONE':
            return state.map((user)=>{
            if(user.id===action.id){
                return {...user,status:!user.status}
            }
            else{
                return user
            }
    })
    default:
        return state;
    }
}

const ReducerNew = () => {
    const [userData,dispatch]=useReducer(reducer,users)
    console.log("userData",userData)
    return (
        <div>
            <h1>ReducerNew</h1>
            {
                userData.map((user)=>(
                    <div key={user.id}>
                        <input type="checkbox" value={user.status} onChange={()=>dispatch({type:'DONE',id:user.id})}/>
                        <span>{user.name}</span>
                    </div>
                ))
            }
        </div>
    );
}

export default ReducerNew;