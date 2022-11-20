import React, { Component, useEffect ,useState} from 'react'
import "../uicss/sidebarchat.css"
import { Avatar } from '@material-ui/core'
const Sidebarchat=({addnewchat})=>{
    const [seed,setseed] = useState("");
    useEffect(() => {
    setseed(Math.floor(Math.random()*5000))
    },[])
    const createnewchat=()=>{
        const roomNAme= prompt("please enter name for chat")
        if(roomNAme){
        
        }
    }
    
    return !addnewchat ?(
     <div className='sidebarchat'>
        <Avatar src="https://avatars.dicebear.com/api/human/${seed}.svg"/> 
        <div className='sidebarchat__info'>
            <h3>Room name</h3>
            <p> Last message. .</p>
        </div>
     </div>
    ): (
      <div onClick={createnewchat}
    className ="sidebarchat">
    <h2> Create new chat</h2>
    </div>
)
}
export default Sidebarchat;