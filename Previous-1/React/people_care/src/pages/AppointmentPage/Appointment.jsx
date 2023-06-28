import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import './appointment.css'
import ItemWrapper from "../../component/ItemWrapper/ItemWrapper";
const Appointment = ()=>{
    const data = [
        {
            id:1,name:"Manisha Singh",speciality:"Lawyer",
            backgroundColor:"#f2f2f2"
        },
        {
            id:2,name:"Ankita Singh",speciality:"doctor",
            backgroundColor:"#fff"
        },
        {
            id:3,name:"Twenkel Sen",speciality:"Developer",
            backgroundColor:"#f2f2f2"
        }
    ]

    return(
        <div className="appointment-ctn">
            <Navbar/>
            <div className="bottom-sec">
                {
                    data.map(item => <ItemWrapper item={item}/>)
                }
            </div>
        </div>
    )
}



export default Appointment