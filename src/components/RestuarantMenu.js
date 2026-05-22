import menuData from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [menu,setMenu] = useState([])

    useEffect(()=>{
        setTimeout(() => {
      setMenu(menuData);
    }, 2000);
    },[])
    if (menu.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="restaurant-menu">

      <h1 className="menu-heading">
        Restaurant Menu
      </h1>

      {menuData.map((item) => (
        <div className="menu-card" key={item.id}>

          <div className="menu-left">

            <h2>{item.name}</h2>

            <h3>₹ {item.price}</h3>

            <p>{item.description}</p>

            <span
              className={
                item.vegClassifier === "VEG"
                  ? "veg"
                  : "nonveg"
              }
            >
              {item.vegClassifier}
            </span>

          </div>

          <div className="menu-right">

            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                item.imageId
              }
              alt={item.name}
            />

            <button>ADD</button>

          </div>

        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;