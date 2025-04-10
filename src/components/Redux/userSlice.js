const initialValue = {
    user: [
        {
            id: 1,
            name: 'John Doe',
            username: 'john',
        },
        {
            id: 2,
            name: 'Jane Doe',
            username: 'jane',
        },
    ],
};

export default function createUserSlice(state = initialValue, action) {
    switch (action.type){
        case 'ADD_USER':
            return {
                ...state,
                user: [...state.user, action.payload]
            }
            case 'DELETE_USER':
                return {
                    ...state,
                    user: state.user.filter((user)=>user.id!==action.payload)
                }
                case 'EDIT_USER':
                    return {
                        ...state,
                        user: state.user.map((user)=>user.id===action.payload.id?action.payload:user)
                    }
                    default:
                    return state                  
    }
}

export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}
export const deleteUser=(id)=>{
    return {
        type: 'DELETE_USER',
        payload: id
    }
}
export const editUser=(user)=>{
    return {
        type: 'EDIT_USER',
        payload: user
    }
}


