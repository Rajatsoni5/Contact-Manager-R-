import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ( {contacts}) => {

const renderlist = contacts.map((contact) => {
   return(
        <ContactCard contact={contact}/>
   )
})
    return (
        <div className="ui called list">{renderlist}</div>
    )
}

export default ContactList;