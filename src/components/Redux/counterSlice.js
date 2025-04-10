// const initialState ={
//     count:0,
// }
// export default function createCounterSlice(state=initialState, action){
//     switch(action.type){
//         case 'INCREMENT':
//             return{
//                 ...state,
//                 count : state.count+1
//             }
//             case 'DECREMENT':
//                 return {
//                     ...state,
//                     count: state.count>0?state.count-1:state.count
//                 }
//                 default :
//                 return state
//     }
// }

// export const increment=()=>{
//     return {
//         type: 'INCREMENT'
//     }
// }

// export const decrement=()=>{
//     return {
//         type: 'DECREMENT'
//     }
// }