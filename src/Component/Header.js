 import { LOGO_URL }  from "../Utils/Constant";

 const Header = () => {
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
        </ul>
      </div>
    </div>
  )
};

export default Header;