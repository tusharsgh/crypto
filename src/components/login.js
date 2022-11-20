import React, { Component } from 'react'
import Logo  from '../components/Vectors.png'
import "../uicss/login.css";
const Login =()=>{
  return(
    <div className='main'>
      <div className ='submain'>
        <h1 className='heading'>Sign In</h1>
      </div>
      <div>
        <input type ='text' placeholder='username' className='tabs'></input>
    </div>
    <div>
      <input type ='password' placeholder='password' className='tabs2'/>
      </div> 
      
    <button className='button2'>Login</button>
    <div>
    <p className="link2">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
    </div>
           
            
           
  <img src={Logo} className="bottom2"/>
      
    </div>
    
  );
}
export default Login;