
import React, { Component } from 'react'
import email from "../images/email.jpg";
import profile from "../images/a.png";
import "../uicss/login.css";
import pass from "../images/pass.png";



function Register(){
    return(
        <div className='main'>
            <div className='sub-main'>
                
                    <div>
                  
                 
               
                </div>
                <div>
             <h1>Register</h1>
             <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="email" className="name"/>
             </div>
             <div className="second-input">
             <img src={profile} alt="pass" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className='third-input'>
            <img src ={pass} alt ="pass" className='email'/>
            <input type ="password" placeholder='password' className='name'/>
            
           </div>
           <div className='fourth-input'>
           
            <input type ="text" placeholder='First-Name' className='name'/>

           </div>
           <div className='fourth-input'>
           
            <input type ="text" placeholder='Last-Name' className='name'/>
            </div>

                </div>
            </div>
        </div>
    )
}
export default Register ;