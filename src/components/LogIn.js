import axios from "axios";
import React from "react";
import { useState } from "react";



function LogIn(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const SignInHandler = (e) => {
         e.preventDefault();
        axios.post('https://contact-manager-backend-qfkb.onrender.com/login', {
            email, password
        }).then((res) => {
            const data =  res.data;
            if(!data.user){
                alert("Invalid combination of email and password ");
            }else{
                 localStorage.setItem('token',data.user);
                 window.location.href = 'add-contact';
                 props.loggedIn();
                 
            }
        }).catch((err) => {
            console.log("There is an error in logging in client side", err);
            
           
        })
    }

    

    return (
        <div>
            <form method="POST" onSubmit={SignInHandler}>
                <label htmlFor="email">Email</label> <br />
                <input type="email" name="email" value={email} placeholder="Enter email" className="input" onChange={(e) => setEmail(e.target.value)} />   <br />

                <label htmlFor="password">Password</label> <br />
                <input type="password" name="password" value={password} placeholder="Enter password" className="input" onChange={(e) => setPassword(e.target.value)} /> <br />


                <button type="submit" className="submitButton">Sign In</button>
            </form>
        </div>
    )
}

export default LogIn;