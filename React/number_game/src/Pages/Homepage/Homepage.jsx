import React, { useState } from "react";

import './homepage.css'

function Homepage(){
    const [num , setNum]    =   useState(0)
    const [flag,setFlag] = useState(false)

    console.log(useState(0))
    function increaseHandler(){
        if(num === 10){
            setFlag(!flag)
        }
        setNum(num+1)
        console.log(num)
    }
    function decreaseHandler(){
        if(num === -10){
            setFlag(!flag)
        }
        setNum(num-1)
        console.log(num)
    }
    return(
        <div className='main-ctn'>
            {flag === true &&  <div className="warning"></div>}
            <h2 className="number">{num}</h2>
            <div className="btn-ctn">
                <button className="increase" onClick={increaseHandler}>Increase</button>
                <button className="decrease" onClick={decreaseHandler}>Decrease</button>
            </div>
        </div>
    )
}


export default Homepage

