import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostList = () =>{
    const [posts, setPosts] = useState([]);
    const navigate=useNavigate();
    const fetchPosts = async () => {
        try{
            await fetch('https://dummyjson.com/posts').then((res)=> res.json()).then((data)=> setPosts(data.posts));
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchPosts();
        console.log('PostList render',posts);
    },[]);

    return (
        <div>
            <h1>Post List</h1>
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
                <tbody >
                    {
                        posts.map((post) => 
                             (
                            <tr key={post.id}>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <button onClick={()=>navigate(`/post/${post.id}`)}>View</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PostList;