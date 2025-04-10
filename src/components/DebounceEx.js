import { useEffect, useRef, useState } from "react"
import $ from 'jquery';

 const useDebouncing=(func,delay)=>{
   const timerRef = useRef(null);

 return function (...arg){
      clearTimeout(timerRef.current);

      timerRef.current=setTimeout(()=>{
         func.apply(this,arg)
     },delay)
 }
}
const DebounceEx=()=>{
    const [search,setSearch]=useState('')
    const handleSearch=()=>{
        console.log('searching...',search)
    }
    $(document).ready(function(){
        $('.lorem').click(function(){
            $("p").hide();
          });
      })

    const searchCheck=useDebouncing(handleSearch,500)

    const throttleing=(func,delay)=>{
        let flag=true;
        return function(...arg){
            if(flag){
                func.apply(this,arg)
                flag=false;
                setTimeout(()=>{
                    flag=true;
                },delay)
            }
        }
    }

    useEffect(()=>{
        searchCheck();
    },[search])
    useEffect(()=>{
        window.addEventListener('resize',throttleing(()=>console.log('resizing...'),500))
        return ()=>window.removeEventListener('resize',throttleing)
    },[])
    return (
        <div>
            <span>Debouncing Example....</span>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <div className="lorem" onClick={()=>console.log('clicked')}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nisl nec odio tincidunt
                bibendum. Nulla facilisi. Nullam sit amet urna nec nunc lacinia vestibulum. Sed nec
            </div>
        </div>
    )
}

export default DebounceEx;