import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const url="https://jsonplaceholder.typicode.com/comments?postId="
const PostDetails=()=>{
    const {id}=useParams();
    const [postData,setPostData]=useState([]);
    const navigate=useNavigate();
    console.log("ID",id);
    const fetchData= async ()=>{
        await fetch(`${url}${id}`).then((res)=>res.json()).then(setPostData);
        console.log(postData);
    }
    useEffect(()=>{
        fetchData();
    },[])
    console.log(postData);

    return(
        <div>
            <h1>Post Details</h1>
            <button onClick={()=>navigate('/')}>Back To Post Dashboard</button>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>PostId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postData && (
                         postData.map((post)=>{
                            return(
                                <tr key={post.id}>
                                <td>{post.postId}</td>
                                <td>{post.id}</td>
                                <td>{post.name}</td>
                                <td>{post.email}</td>
                                <td>{post.body}</td>
                            </tr>
                            )
                         })
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PostDetails;