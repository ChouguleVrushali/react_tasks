import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const arr=["React basics","State management","Routing","Performance Optimization","CSS Animation"];
const Component=()=>{
    const [search,setSearch]=useState(null);
    return (
        <>
        <input type="text" value={search} placeholder="search here..." onChange={(e)=>setSearch(e.target.value)}/>
            {search?(arr.map((task)=>{
                    if(task.toLowerCase().includes(search.toLowerCase())){
                        return <ul><li key={task}>{task}</li></ul>
                    }
                    return null;
                })):(arr.map((task)=>{
                        return <ul><li key={task}>{task}</li></ul>
                }))
            }
        </>
    )
}

const select=ReactDOM.createRoot(document.getElementById("root"));
select.render(<Component/>)