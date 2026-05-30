import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import onlineStatus from "../utils/onlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [onlineText, setonlineText] = useState("Login");

  const status = onlineStatus();
  let cart = useSelector((store)=>store.cart.items)

  return (
    <header className="flex items-center justify-between px-10 py-4 bg-white shadow-md sticky top-0 z-50">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={LOGO_URL}
          alt="food-logo"
        />

        <h2 className="text-2xl font-bold text-orange-500 tracking-wide">
          CochinFoods
        </h2>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-8 text-[17px] font-medium text-gray-700">
          
          {/* Online Status */}
          <li className="flex items-center gap-2">
            <span className="text-xl">
              {status ? "🟢" : "🔴"}
            </span>

            <span className="text-sm text-gray-500">
              {status ? "Online" : "Offline"}
            </span>
          </li>

          <li>
            <Link
              className="hover:text-orange-500 transition duration-200"
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="hover:text-orange-500 transition duration-200"
              to="/grocery"
            >
              Grocery
            </Link>
          </li>

          <li>
            <Link
              className="hover:text-orange-500 transition duration-200"
              to="/about"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              className="hover:text-orange-500 transition duration-200"
              to="/contact"
            >
              Contact
            </Link>
          </li>

          {/* Cart */}
          <li><Link className="cursor-pointer hover:text-orange-500 transition duration-200" to="/cart">
            Cart 🛒{cart.length}
            </Link>
          </li>

          {/* Login Button */}
          <li>
            <button
              onClick={() => {
                onlineText === "Login"
                  ? setonlineText("Logout")
                  : setonlineText("Login");
              }}
              className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition duration-300 shadow-md"
            >
              {onlineText}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;