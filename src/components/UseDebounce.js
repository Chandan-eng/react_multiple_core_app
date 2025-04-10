import { useEffect, useState } from "react";

const useDebounce=(value,delay)=>{
    const [debouncedValue,setDebouncedValue]=useState(value);
    useEffect(()=>{
        const handler=setTimeout(()=>{
            setDebouncedValue(value);        
        },delay)

        return ()=>{
            clearTimeout(handler);
        }
    },[value,delay])
    return debouncedValue;
}

const UseDebounce=()=>{
    const [search,setSearch]=useState('');
    const debounceSearch=useDebounce(search,500);
    useEffect(()=>{
if(debounceSearch){
    console.log("Debounce Search",debounceSearch);
}
    },[debounceSearch])
    return (
        <div>
            <h1>UseDebounce Component</h1>
            <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />
            <p>Searching for: {debounceSearch}</p>
        </div>
    )
}

export default UseDebounce;