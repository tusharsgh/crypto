import React from 'react'
import "../uicss/chat.css"
import { Avatar,IconButton } from '@material-ui/core'
import { useEffect, useState } from "react"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MmsRoundedIcon from '@mui/icons-material/MmsRounded';
import MicNoneIcon from '@mui/icons-material/MicNone';
function chat() {
    const sendMessage=()=>{}
  return (
    <div  className='chat'>
      <div className='chat__header'>
      <Avatar/>
      <div className ="chat__headerifno">
        <h2>room name</h2>
        
      </div>
      <div className='chat__headerright'>
      <IconButton>
                
                <MoreVertIcon/>
                </IconButton>
      </div>
      </div>
      <div className='chat__body'><p className=' chat__message'>heyy</p></div>
      <div className='chat__footer'>
      <IconButton> 
        <MmsRoundedIcon/>
      </IconButton>
      <form>
        <input type="text" placeholder='Type a message'/>
        <button onClick={sendMessage} type="submit">send a message</button>
      </form>
      <IconButton> 
      <MicNoneIcon/>
      </IconButton> 
      </div>
    </div>
  )
}

export default chat
