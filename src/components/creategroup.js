import React from "react"
import    "../uicss/creategroup.css";
import Sidebar  from "./sidebar";
import Chat from "./chat";
const creategroup =()=>{
return(
    <div className="main">
        <div className="body">
           <Sidebar/>
           <Chat/>

        </div>
    </div>
)
}
export default creategroup;
