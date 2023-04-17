import React, { useState } from "react";
import './homepage.css'
import Navbar from "../../component/Navbar/Navbar";
import doctor_logo from './doctor.jpg'

import Button from "../../component/Button/Button";

const Homepage = ()=>{


    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    function emailHandler(event){
        setEmail(event.target.value)
    }

    function passwordHandler(event){
        setPassword(event.target.value)
    }

    function submitHandler() {
        console.log(email,password)
        setEmail("")
        setPassword("")
    }
    return(
        <div className='homepage'>
            <Navbar/>
            <div className="bottom">
                <div className="left">
                    <img src={doctor_logo} alt="" className="doctor_logo"/>
                </div>
                <div className="right">
                    <input type="text" className="ip" placeholder="Enter email" onChange={emailHandler}
                        value={email}
                    />
                    <input type="password" className="ip" placeholder="Enter password" onChange={passwordHandler}
                        value={password}
                    />
                    <button onClick={submitHandler}>Login</button>
                </div>
            </div>
        </div>
    )
}


export default Homepage