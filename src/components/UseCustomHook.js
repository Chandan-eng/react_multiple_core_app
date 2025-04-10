import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const useFetchData =(url)=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch(url).then((res)=>res.json()).then((data)=>setData(data));
    },[url]);
    return data;
}

const UseCustomHook=()=>{
    const navigate=useNavigate();
    const url="https://jsonplaceholder.typicode.com/posts";
    const data=useFetchData(url);
    console.log(data);
    return (
        <div>
            <h1>Custom hook...</h1>
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
                    {
                        data.map((data)=>{
                            return (
                                <tr key={data.id}>
                                    <td>{data.userId}</td>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.body}</td>
                                    <td>
                                    <button onClick={()=>navigate(`/post/${data.id}`)}>View Details</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UseCustomHook