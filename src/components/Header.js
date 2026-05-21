import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
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
          <li>Home</li>
          <li>About</li>
          <li>Restaurants</li>
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
