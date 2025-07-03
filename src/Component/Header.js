 import { useState } from "react";
import { LOGO_URL }  from "../Utils/Constant";
import { useState } from "react";
import { Link } from "react-router-dom";

 const Header = () => {

  const [btnNameReact,setbtnNameReact] = useState("Login");

  
  return (
    <div className="header">
      <div >  
        <img className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="Nav-items">
        <ul>
          
          <li>
           <Link className="homeLink" to="/">  Home </Link> 
          </li>
          <li> <Link className="aboutLink" to= "/about">About</Link></li>
          <li><Link className="contactLink" to="/contact">Contact</Link></li>
          <li>Cart</li>
          <li  > <Link className="login" to ="/login" > Login </Link> </li>

        </ul>
      </div>
    </div>
  )
};

export default Header;