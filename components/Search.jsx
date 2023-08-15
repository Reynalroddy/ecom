"use client"

import React,{useState} from 'react'
import {Button} from "primereact/button"
import {InputText} from "primereact/inputtext"
// import { useRouter } from 'next/router'
// import { useRouter } from "next/navigation";
import { useRouter, useSearchParams } from "next/navigation";
const Search = () => {
    const [value,setValue] = useState('')
const router = useRouter();
    const onSubmit =()=>{
        let queryParams;
        if(value){
            queryParams = new URLSearchParams(window.location.search);
      
            if (queryParams.has("query")) {
              queryParams.set("query", value);
            } else {
              queryParams.append("query", value);
            }  

        

      
            const path = window.location.pathname + "?" + queryParams.toString();
            console.log("path", path);
            router.push(path);
            
                    }
                    else{
                        router.push(`/`)
                    }

    }
  return (
    <div className='flex gap-3 justify-content-center align-content-center'>
    <span className="p-input-icon-left">
<i className="pi pi-search" />
<InputText placeholder="Search"value={value} onChange={(e) => setValue(e.target.value)} />
</span>

<Button label="Submit" severity="secondary" size='small' style={{height:"41px"}}  onClick={onSubmit} />
    </div>
  )
}

export default Search