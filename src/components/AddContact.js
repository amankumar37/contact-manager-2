import axios from "axios";
import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
import { useDispatch } from "react-redux";
import { addContact, initializeContact } from "../store/slices/contactSlice";




function AddContact(props){
       const dispatch = useDispatch();

     

      const [name, setName ]  = useState('');
      const [email, setEmail] = useState('');



      // if the user is already logged in just render the contacts otherwise return to login page

       useEffect(()=>{
    
        const token = localStorage.getItem('token');
        if(!token){
            window.location.href= '/login';
        }else{
             axios.post('https://contact-manager-backend-qfkb.onrender.com/fetch-contacts',{
              token
             }).then((res)=>{
                //setContacts(res.data.contacts);
                
               dispatch(initializeContact(res.data.contacts));
                props.loggedIn();
             }).catch((err)=>{
               console.log("There is an error in useEffect part of add contacts", err);
             })
        }
           
     
 },[])
          // Add contact function

      const add =async (e)=>{
             e.preventDefault();
           
             // making a check if the required fields are filled or not
            if(name===""||email===""){
              alert("All fields are mandatory!");
              return ;
            }

            // getting token from local storage

            const token = localStorage.getItem('token');

            //  add contact api call

            
            axios.post('https://contact-manager-backend-qfkb.onrender.com/add',{
               name, email , token
            }).then((res)=>{
              
               console.log(res);
             //  setContacts(res.data.contacts);
             dispatch(addContact(res.data.contact))
             setName("");
             setEmail("");

            }).catch((err)=>{
              console.log("There is an error in adding the contact client side ", err);

            })



      }
     
     
      // return statement
  
       return (
        <div className="ui main add-contact">
          <div style={{display:"flex", justifyContent:"center", paddingBlock:"0.5rem" }}><h2>Add Contact</h2></div>
       <form method="POST" className="ui form" onSubmit={add} >
             <div className="field">
               <label id="label-color">Name</label>
               <input type="text"  name="name" value={name} placeholder ="Enter name" onChange={(e)=>{setName(e.target.value)}} />
             </div>

             <div className="field">
               <label id="label-color">Email</label>
               <input type="email"  name="email"  value={email} placeholder ="Enter email" onChange={(e)=>setEmail(e.target.value)} />
             </div>

             <button className="ui button blue" type="submit" >Add</button>
       </form>

       <ContactList  />


   </div>
       )

       
}


export default AddContact;
 