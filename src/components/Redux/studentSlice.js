const initialData={
   students: [
        {
            id:1,
            student_name:"Sahil",
            student_email:"sahil@gmail.com"

        }
    ]
}

export function studentSlice(state=initialData,action){
    switch(action.type){
        case 'ADD_STUDENT':
           return {
                ...state,
                students: [
                    ...state.students,
                    action.payload
                ]
            }
            case 'DELETE_USER':
                return {
                    ...state,
                    students:
                        state.students.filter((student)=>student.id !==action.payload)
                }

                case 'EDIT_STUDENT':
                    return {
                        ...state,
                        students: state.students.map((student)=>
                            student.id === action.payload.id? action.payload:student
                        )

                    }
                    default:
                        return state
    }
}

export const addStudent=(student)=>{
    return {type:'ADD_STUDENT',payload:student}
}
export const deleteStudent=(id)=>{
    return {type:'DELETE_USER',payload:id}
}

export const editStudent=(student)=>{
    return {type:'EDIT_STUDENT',payload:student}
}