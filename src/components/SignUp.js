import axios from "axios";
import React, { useState } from "react";

function SignUp(props){


    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function SignUpHandler(e){
        e.preventDefault();
        
        axios.post('https://contact-manager-backend-qfkb.onrender.com/signup',{
            firstName,lastName,email,password
        }).then((res)=>{
            console.log(res);
            window.location.href="/login";
        }).catch((err)=>{
            console.log('There is an error in signing up in client side ' , err);
        })
        
    }
  


    return(
        <div >
            <form method="GET" onSubmit={SignUpHandler}>  

                   <label htmlFor="firstName">First Name</label> <br />
                    <input type="text" name="firstName" value={firstName}  placeholder="Enter first name"className="input" onChange={(e)=>setFirstName(e.target.value)} />   <br />

                    <label htmlFor="lastName">Last Name</label> <br />
                    <input type="text" name="lastName" value={lastName} placeholder="Enter last name"className="input" onChange={(e)=>setLastName(e.target.value)} />   <br />



                    <label htmlFor="email">Email</label> <br />
                    <input type="email" name="email" value={email} placeholder="Enter email"className="input"  onChange={(e)=>setEmail(e.target.value)} />   <br />
                    
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" name="password" value={password} placeholder="Enter password" className="input"  onChange={(e)=>setPassword(e.target.value)}/> <br />


                     <button type="submit" className="submitButton">Sign Up</button>
            </form>
        </div>
    )
}


export default SignUp;