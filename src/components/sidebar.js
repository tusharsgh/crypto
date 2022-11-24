import React, { Component } from 'react'

import Sidebarcss from "../uicss/sidebar.css"
import { Avatar, IconButton, } from "@material-ui/core"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Sidebarchat from './sidebarchat';
import { useState } from 'react';
import { useEffect } from 'react';
const SIdebar = () => {
    const [groups, setgroups] = useState([]);
    useEffect(() => {
        const fetch_data = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/getgroups', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            })
            const data = await response.json()
            setgroups(data['groups'])
        }
        fetch_data()
        // console.log(groups)
    }, [])
    return (
        <div className='siderbar'>
            <div className='sidebar__header'>
                <Avatar />
                <div className='sidebar__headerright'>
                    <IconButton>
                        <DonutLargeIcon />

                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>

                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchIcon />
                    <input placeholder='Search or start new chat' type="text" />
                </div>

            </div>
            <div className='sidebar_chats'>
                <Sidebarchat addnewchat />
                {groups.map((data, index) => {
                    return (<Sidebarchat key={index} data={data} />)

                })}
            </div>

        </div>
    )
}
export default SIdebar;