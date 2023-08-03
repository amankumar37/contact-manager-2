import React from "react";
import user from "./user.png"
import { useDispatch } from "react-redux";
import { removeContact } from "../store/slices/contactSlice";
import axios from "axios";

function ContactCard(props){


     const dispatch = useDispatch();
     const token = localStorage.getItem('token');
        const id = props.item._id;


        
        // For deleting a contact 

     function delete_contact(){


           axios.post('http://localhost:8000/delete-contact', {
            token, id
           }).then((res)=>{
                   if(res.data.status==='ok') dispatch(removeContact(props.id));
                   else {
                      console.log("You are not authoroized to delete this contact");
                   }
           }).catch((err)=>{
                console.log("There is an error in deleting contatct client side", err);
           })
     }



     //return statement 



    return (
        <div className="item" style={{display:"flex",justifyContent:"space-between", width:"100%",height:"50%" }} >
         <img className="ui avatar image" src={user} alt="image not found" />
            <div className="content"> 
                  <div className="header" id="label-color">{props.item.name}</div>
           
                  <div >{props.item.email}  </div>
            </div>
            <i style={{color:"red"}} className="trash alternate outline icon" onClick={delete_contact}></i>

        </div>
       
)
}


export default ContactCard;