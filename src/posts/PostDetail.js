import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail=()=>{
    const [data,setData]=useState([]);
    const {id}=useParams();
    console.log('PostDetail render',id);
    const fetchData = async() =>{
        await fetch(`https://dummyjson.com/posts/user/${id}`).then((res)=>res.json()).then((data)=>setData(data.posts));
        }

      useEffect(()=>{
          fetchData()
        },[id]) 
        
        console.log('PostDetail render',data);
        return(
        <div className="container">
            <h1>Post Detail</h1>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Reactions</th>
                        <th>Views</th>
                    </tr>
                </thead>
                <tbody>
                  {
                        data.map((post)=>(
                            <tr key={post.id}>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    {
                                        <div>
                                       <span>Likes: {post.reactions.likes} </span>
                                       <span>DisLike:{post.reactions.dislikes}</span>
                                       </div>
                                    }
                                </td>
                                <td>{post.views}</td>
                            </tr>
                        ))
                  }
                </tbody>

            </table>
        </div>
    )
}

export default PostDetail;