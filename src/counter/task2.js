import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Counter=()=>{
    const [count, setCount]=useState(0);
    return (
        <div className="main">
            <h1>Counter App</h1>
            <button onClick={()=>setCount(count+1)}>Increase  <span>+</span></button>
            <button onClick={()=>setCount(count-1)}>Decrease  <span>-</span></button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <h2>Counter: {count}</h2>
        </div>
    )
}
const select=ReactDOM.createRoot(document.getElementById("root"));
select.render(<Counter/>)