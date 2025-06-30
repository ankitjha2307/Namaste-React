 import { useState } from "react";
import { LOGO_URL }  from "../Utils/Constant";
import { useState } from "react";

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
          
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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