import { useState } from "react";

const AddPost = () => {
    const [postData, setPostData] = useState({
        title: '',
        userId: ''
    });

    const handleAddPost = (e) => {
        e.preventDefault();
        console.log(postData);
        fetch('https://dummyjson.com/posts/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
    }
    const updatePostData=(e)=>{
        e.preventDefault();
        fetch('https://dummyjson.com/posts/2',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
            })
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
    }
    return (
        <div>
            <h1>Add Post....</h1>
            <div className="container mt-4">
                <form onSubmit={handleAddPost}>
                    <div className="mb-3">
                        <label>Title:</label>
                        <input type="text" placeholder="Enter Title" onChange={(e)=>setPostData(prevState => ({ ...prevState, title: e.target.value }))}  />
                    </div>
                    <div className="mb-3">
                        <label>User Id:</label>
                        <input type="number" placeholder="Enter User Id" onChange={(e)=>setPostData(prev=>({...prev,userId:e.target.value}))}/>
                    </div>
                    <button type="submit" className="btn-primary">Add Post</button>
                    <button onClick={updatePostData}>Update Post</button>
                </form>
            </div>
        </div>
    )
}

export default AddPost;