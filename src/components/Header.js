import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [onlineText,setonlineText] = useState("login")
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="food-logo"
        />
        <h2>CochinF oods</h2>
      </div>

      <nav className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About</Link>
            </li>
          <li>Restaurants</li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>Cart 🛒</li>
          <li onClick={()=>{
            onlineText === "login" ? setonlineText("logout") : setonlineText("login")

          }}>{onlineText}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
