import React, { Component } from 'react'

import Sidebarcss from "../uicss/sidebar.css"
import {Avatar,IconButton,} from "@material-ui/core"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Sidebarchat from './sidebarchat';
const SIdebar =()=>{
    return(
        <div className='siderbar'>
            <div className='sidebar__header'>
            <Avatar/>
            <div className='sidebar__headerright'>
                <IconButton>
                <DonutLargeIcon/>
                
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                
             <MoreVertIcon/>
             </IconButton>

            </div>
            </div>
            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                <SearchIcon/>
             <input placeholder='Search or start new chat' type ="text"/>
                </div>
            
            </div>
                <div className='sidebar_chats'>
                 <Sidebarchat addnewchat/>
                 <Sidebarchat/><Sidebarchat/><Sidebarchat/>
                 </div>
           
        </div>
    )
}
export default SIdebar;