
import React, { Component } from 'react'
import email from "../images/email.jpg";
import profile from "../images/a.png";
import "../uicss/register.css";
import pass from "../images/pass.png";
import Logo from '../components/Vectors.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Register() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
        "email": email,
        "first_name": first_name,
        "last_name": last_name,
      })
    });
    const data = await response.json()
    if (data.token) {
      localStorage.setItem("token", "Token " + data.token)
      setEmail("");
      setfirst_name("");
      setlast_name("");
      setpassword("");
      setusername("");
      navigate("/")  
    }
    else {
      console.log(data)
      if (data.hasOwnProperty('email') && data.hasOwnProperty('username')) {
        window.alert("A user with this email and username already exists");
      }
      else if (data.hasOwnProperty('email')) {
        window.alert("A user with this email already exists");
      }
      else if (data.hasOwnProperty('username')) {
        window.alert("A user with this username already exists");
      }
      else {
        window.alert("Some error occured! Please try again later");
      }
    }
  }

  return (
    <div className='main'>
      <div className='submain'>
        <h1 className='heading'>Register</h1>
      </div>
      <div>
        <input type='text' placeholder='username' value={username} onChange={(e) => { setusername(e.target.value) }} className='tabs'></input>
      </div>
      <div>
        <input type='password' placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} className='tabs2' />
      </div>
      < div>
        <input type='text' placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} className='tabs3' />
      </div>
      < div>
        <input type='text' placeholder='firstname' value={first_name} onChange={(e) => { setfirst_name(e.target.value) }} className='tabs4' />
      </div>
      < div>
        <input type='text' placeholder='lastname' value={last_name} onChange={(e) => { setlast_name(e.target.value) }} className='tabs5' />
      </div>

      <button className='button' style={{ cursor: 'pointer' }} onClick={handleSubmit}>Register</button>
      <div>
        <p className="link" style={{ textAlign: 'center' }}>
          Or <a href="/login">Login</a>
        </p>
      </div>



      <img src={Logo} className="bottom" />

    </div>
  )
}
export default Register;