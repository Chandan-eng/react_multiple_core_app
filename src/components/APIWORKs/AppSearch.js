import { useEffect, useState } from "react";
const url=`https://dummyjson.com/products/search?q=`
const AppSearch=()=>{
    const [search,setSearch]=useState('');
    const [searchData,setSearchData]=useState([]);
    const handleSearch= async ()=>{
        console.log("Search Data",search);
        const fetchData= await fetch(`${url}${search}`).then((res)=>res.json());
        console.log(fetchData);
        setSearchData(fetchData?.products);
    }
    console.log('Search Data',searchData);
    useEffect(()=>{
        let timer;
        if(search.length>0){
            timer=setTimeout(()=>{
                handleSearch();
            },500);
        }
        else{
            setSearchData([]);
        }
        return ()=>clearTimeout(timer);
    },[search]);
    return (
        <div>
            <h1>Search Component</h1>
            <input className="search_app" type="text" value={search} onChange={(event)=>setSearch(event.target.value)} placeholder="Search Here"/>
            <div style={{padding: "20px",width:"50%",textAlign:"left",display:"flex",flexDirection:"column",
                border:`${searchData.length>0 ?"1px solid black":"" }`, borderRadius:"10px"}}>
                {searchData?.map((data)=>(
                    <div>
                    <span key={data.id}>{data.title}</span>
                    <br/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AppSearch;