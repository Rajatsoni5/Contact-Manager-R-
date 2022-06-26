import React from "react";
import Userdefault from "../Image/Userdefault.png"

const ContactCard = ({contact}) => {
    const {id, name, email} = contact
    return (
        <div className="item">
        <div className="content">
            <img height="30px" src={Userdefault}/>
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <i className="crash alternate outline icon" style={{color: "red"}}></i>
    </div>
    )
};

export default ContactCard;