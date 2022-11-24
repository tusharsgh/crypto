import React, { Component } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Vectors.png'
import "../uicss/login.css";
const Login = () => {
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async () => {
    console.log(username, password)
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": username,
        "password": password, 
      })
    });
    const data = await response.json()
    if (data.token) {
      localStorage.setItem("token", "Token " + data.token)
      setpassword("");
      setusername("");
      navigate("/")
    }
    else {
      window.alert("Some error occured! Please try again later");
      setpassword("");
      setusername("");
    }
  }
  return (
    <div className='main'>
      <div className='submain'>
        <h1 className='heading'>Sign In</h1>
      </div>
      <div>
        <input type='text' placeholder='username' value={username} onChange={(e) => { setusername(e.target.value) }} className='tabs'></input>
      </div>
      <div>
        <input type='password' placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} className='tabs2' />
      </div>

      <button className='button2' onClick={handleSubmit}>Login</button>
      <div>
        <p className="link2">
          <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
        </p>
      </div>



      <img src={Logo} className="bottom2" />

    </div>

  );
}
export default Login;