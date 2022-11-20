
import React, { Component } from 'react'
import email from "../images/email.jpg";
import profile from "../images/a.png";
import "../uicss/register.css";
import pass from "../images/pass.png";
import Logo  from '../components/Vectors.png'



function Register(){
    return(
        <div className='main'>
        <div className ='submain'>
          <h1 className='heading'>Register</h1>
        </div>
        <div>
          <input type ='text' placeholder='username' className='tabs'></input>
      </div>
      <div>
        <input type ='password' placeholder='password' className='tabs2'/>
        </div> 
       < div>
        <input type ='text' placeholder='email' className='tabs3'/>
        </div> 
        < div>
        <input type ='text' placeholder='firstname' className='tabs4'/>
        </div> 
        < div>
        <input type ='text' placeholder='lastname' className='tabs5'/>
        </div> 
        
      <button className='button'>Register</button>
      <div>
      <p className="link">
                Or<a href="#">Sign in</a>
              </p>
      </div>
             
              
             
    <img src={Logo} className="bottom"/>
        
      </div>
    )
}
export default Register ;