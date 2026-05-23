import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import onlineStatus from "../utils/onlineStatus";
const Header = () => {
  const [onlineText, setonlineText] = useState("login");
  let status = onlineStatus()
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="food-logo" />
        <h2>CochinFoods</h2>
      </div>

      <nav className="nav-items">
        <ul>
          <li>
            <span>{status ? "🟢" : "🔴"}</span>
          </li>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li>Cart 🛒</li>
          <li
            onClick={() => {
              onlineText === "login"
                ? setonlineText("logout")
                : setonlineText("login");
            }}
          >
            {onlineText}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
