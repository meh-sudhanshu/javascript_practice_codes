import React, { useState } from "react";
import './homepage.css'
import Navbar from "../../component/Navbar/Navbar";
import doctor_logo from './doctor.jpg'

import Button from "../../component/Button/Button";

import { useNavigate } from "react-router-dom";

const Homepage = ()=>{


    let navigate = useNavigate()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [flag,setFlag] = useState(false)

    function emailHandler(event){

        setEmail(event.target.value)
        setFlag(false)
    }

    function passwordHandler(event){

        setPassword(event.target.value)
        setFlag(false)
    }

    function submitHandler() {
        if(email === "test@gmail.com" && password === "Test@123"){
            navigate("/book-appointment")
        }else{
            setFlag(true)
        }
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
                    <input type="text" className="ip" placeholder="Enter email" onChange={emailHandler} value={email}
                    />
                    <input type="password" className="ip" placeholder="Enter password" onChange={passwordHandler} value={password}
                    />
                    <button onClick={submitHandler} className="btn">Login</button>
                    {flag && <h2 className="warning">either email or password is incorrect</h2>}
                </div>
            </div>
        </div>
    )
}


export default Homepage


//https://www.facebook.com/

//https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0