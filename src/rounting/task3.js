
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter ,RouterProvider,Link, Outlet} from "react-router";
import Home from "./components/Home";
import About from "./components/About";

const Body=()=>{
    return (
        <>
            <ul className="list">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <Outlet/>
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Body/>,
        children:[
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            }
        ]
    },
    
])
const select=ReactDOM.createRoot(document.getElementById("root"));
select.render(<RouterProvider router={appRouter}/>)