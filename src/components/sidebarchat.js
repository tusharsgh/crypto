import React, { Component, useEffect, useState } from 'react'
import "../uicss/sidebarchat.css"
import { Avatar } from '@material-ui/core'
const Sidebarchat = ({ addnewchat,data }) => {
    const [seed, setseed] = useState("");
    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000))
    }, [])
    const createnewchat = () => {
        const roomNAme = prompt("please enter name for chat")
        if (roomNAme) {

        }
    }
    // console.log(data.group_name)

    return !addnewchat ? (
        <div className='sidebarchat' onClick={localStorage.setItem('groupname',data.group_name)}>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='sidebarchat__info'>
                <h3>{data.group_name}</h3>
                {/* <p> Last message. .</p> */}
            </div>
        </div>
    ) : (
        <div onClick={createnewchat}
            className="sidebarchat">
            <h2> Create new chat</h2>
        </div>
    )
}
export default Sidebarchat;