import React from "react";
import './itemwrapper.css'


const ItemWrapper = (props)=>{
    //console.log(props.item.speciality)

    const style = {
        backgroundColor:props.item.backgroundColor
    }

    return(
        <div className="item_wrapper" style={style}>
            <h2 className="id_">{props.item.id}</h2>
            <h2 className="doc_name">{props.item.name}</h2>
            <h2 className="doc_speciality">{props.item.speciality}</h2>
            <button className="message_btn">Message</button>
            <button className="appointment_btn">Book an appointment</button>
        </div>
    )
}



export default ItemWrapper