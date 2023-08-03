import React, { useEffect, useState } from "react";
import AddContact from "./AddContact"
import Homepage from "./Homepage";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import "../App.css"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";


function App() {
  const [auth, setAuth] = useState(false);

// this function will set the auth to true and hides the login and signup buttons
  function loggedIn(){
    setAuth(true);
  }
  


  // return statement


  return (
    <div className="App" >
      
      <Router>
        <div id="homepage" className="app-body">

          {
            auth === false ? <Homepage /> : <h1>Contact Manager</h1>
          }
          <Routes >


            
            <Route path="/login" element={<LogIn loggedIn={loggedIn} />} />
            <Route path="/signup" element={<SignUp />} />




          </Routes>
        </div>

        <Routes>
          <Route path="/add-contact" element={<AddContact  loggedIn={loggedIn} />} />
        </Routes>






      </Router>
    </div>
  )
}

export default App;

