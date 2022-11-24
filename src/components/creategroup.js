import React from "react"
import "../uicss/creategroup.css";
import Sidebar from "./sidebar";
import Chat from "./chat";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const creategroup = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            navigate("/login")
        }
    }, [])

    return (
        <div className="main">
            <div className="body">
                <Sidebar />
                <Chat />

            </div>
        </div>
    )
}
export default creategroup;
