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
           <Link to="/">  Home </Link> 
          </li>
          <li> <Link to= "/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <button className="login" 
          onClick={() => {
           btnNameReact === 'Login' ? setbtnNameReact("Logout") : setbtnNameReact("Login");
          }}
          > 
          {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
};

export default Header;