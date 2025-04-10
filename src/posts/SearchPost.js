import { useEffect, useState } from "react";

const SearchPost=()=>{
    const [search,setSearch]=useState('');
    const [searchList,setSearchList]=useState([]);

    const fetchData=()=>{
        fetch(`https://dummyjson.com/posts/search?q=${search}`).then((res)=> 
        res.json()).then((data)=> setSearchList(data?.posts))
    }

    useEffect(()=>{
        if(search.length>0){
       let timer= setTimeout(()=>{
            fetchData();
        },500)
    
        return ()=>clearTimeout(timer);
    }
    else{
        setSearchList([]);
    }
    },[search]);

    console.log(searchList);
    
    return(
        <div>
            <h1>Search Post</h1>
            <div className="container">
            <input className="container w-40 border border-secondary" type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search Post"/>
               <div style={{border:'1px solid #000',borderRadius:'5px',padding:'10px'}}>
                {
                    
                    searchList.map((post)=>(
                        <div key={post.id}>
                            <span>{post.title}</span>
                        </div>))
                }
                </div>
            </div>
        </div>
    )
}

export default SearchPost;