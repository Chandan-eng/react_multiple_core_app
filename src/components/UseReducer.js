import { useReducer } from "react"

const userData=[
    {
        id:1,
        name:'John Doe',
        status:true,
    },
    {
        id:2,
        name:'Jane Doe',
        status:false,
    }

]

const reducer=(state,action)=>{
    switch(action.type){
        case 'DONE':
            return state.map(
                (user)=> {
                    if(user.id === action.id){
                        return {...user,status:!user.status}
                    }
                    else{
                        return user
                    }
                }
            )

            default:
                return state
    }
}

export const UseReducer=()=>{
    const [users,dispatch]=useReducer(reducer,userData)
    console.log('UseReducer render',users);

    return (
        <div>
            <h1>UseReducer Component</h1>
            {
                users.map(
                    (user)=>(
                        <div key={user.id}>
                            <h3>{user.name}</h3>
                            <button onClick={()=>dispatch({type:'DONE',id:user.id})}>{user.status?'Done':'Not Done'}</button>
                        </div>
                    )
                )
            }
        </div>
    )
}