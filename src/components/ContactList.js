import React from "react";
import { useSelector } from "react-redux";
import ContactCard from './ContactCard'


function ContactList(){

    // accessing the state from redux store


    const data = useSelector((state)=>{
        return  state.contacts;
        
      })

      // rendering contact list


function renderContactList(){
      


   return ( data.map((item,key)=>{
        return  <ContactCard item={item} key={key} id={key}  /> 
    })
   )
}

// return statement

return (
    <div className="ui celled list">{renderContactList()}</div>
)


}

export default ContactList;