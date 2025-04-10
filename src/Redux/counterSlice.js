const counter={
    count:0
}

export function counterSlice(state=counter,action){
    switch(action.type){
        case 'INC':
            return {...state,count:state.count+1}
            case 'DEC':
                return {
                    ...state,
                    count:state.count > 0 ? state.count-1: state.count
                }
                case 'RESET':
                   return {
                      ...state,
                      count:0
                    }

                    default:
                        return state
    }
}

export const increment=()=>{
    return {
        type:'INC'
    }
}

export const decrement=()=>{
    return {
        type:'DEC'
    }
}

export const reset=()=>{
    return {
        type:'RESET'
    }
}