import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Homepage(props){
    return (
        <div >
           <div>
           <h3>Welcome to contacts manager</h3>
           </div>

            <div>
      
                <div id="link">
                <div className="link-div">
                <Link to="login"><span className="link-color">Login</span></Link>

                </div>
                <Link to="signup" ><span className="link-color">SignUp</span></Link>
                <div className="link-div"></div>
                </div>
            

              
                   
            </div>

        </div>
    )
}

export default Homepage;
