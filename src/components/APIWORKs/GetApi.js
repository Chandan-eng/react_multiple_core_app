import { useEffect, useState } from "react";

const url= "https://jsonplaceholder.typicode.com/posts";
const GetApi=()=>{
const [postData,setPostData]=useState([]);
const fetchData= async () =>{
const data=await fetch(url).then((res)=>res.json());
setPostData(data);
console.log(data);
}

const handleEdit=(post)=>{
    console.log('Edit',post);
}

const handleDelete=(post)=>{
    console.log('Delete',post);
}

useEffect(()=>{
fetchData();
},[]);


    return (
        <>
        <h1>Get API Example</h1>
        <p>Open console to see the response</p>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {postData.map((post)=>(
                    <tr key={post.id}>
                        <td>{post.userId}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td>
                            <button onClick={()=>handleEdit(post)}>Edit</button>
                            <button onClick={()=>handleDelete(post)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        </>
    )
}

export default GetApi;