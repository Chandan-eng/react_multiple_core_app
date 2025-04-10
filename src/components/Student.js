import { useDispatch, useSelector } from "react-redux"
import { addStudent, deleteStudent } from "./Redux/studentSlice";

const Student=()=>{
    const students=useSelector(state=>state.students);
    const dispatch=useDispatch();
    console.log('student',students);
    return(
        <div>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.students.map((student)=>(
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.student_name}</td>
                                <td>{student.student_email}</td>
                               <td><button onClick={()=>dispatch(deleteStudent(student.id))}>Delete</button></td> 
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h1>Add Student</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                dispatch(addStudent({
                    id: parseInt(students.students.length+1),
                    student_name: e.target.student_name.value,
                    student_email: e.target.student_email.value
                }))
            }}>
                <input type="text" name="student_name" placeholder="Enter Name"/>
                <input type="text" name="student_email" placeholder="Enter Email"/>
                <button type="submit">Add Student</button>
            </form>
        </div>
    )
}

export default Student;