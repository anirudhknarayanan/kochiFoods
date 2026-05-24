import menuData from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMenu(menuData);
    }, 2000);
  }, []);

  if (menu.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bg-gray-100 min-h-screen px-4 md:px-10 py-8">
      
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Restaurant Menu
        </h1>

        <p className="text-gray-500 mt-2">
          Delicious food delivered fast 🚀
        </p>
      </div>

      {/* Menu Cards */}
      <div className="flex flex-col gap-6">
        
        {menu.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col md:flex-row justify-between gap-5"
          >
            
            {/* Left Section */}
            <div className="flex-1">

              {/* Veg / Non Veg */}
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                  item.vegClassifier === "VEG"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.vegClassifier}
              </span>

              {/* Food Name */}
              <h2 className="text-2xl font-bold text-gray-800">
                {item.name}
              </h2>

              {/* Price */}
              <h3 className="text-lg font-semibold text-orange-500 mt-2">
                ₹ {item.price}
              </h3>

              {/* Description */}
              <p className="text-gray-500 mt-3 leading-6">
                {item.description}
              </p>
            </div>

            {/* Right Section */}
            <div className="relative flex flex-col items-center">
              
              <img
                className="w-44 h-40 object-cover rounded-2xl"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  item.imageId
                }
                alt={item.name}
              />

              {/* Add Button */}
              <button className="absolute bottom-[-12px] bg-white text-green-600 font-bold px-8 py-2 rounded-xl shadow-lg border hover:bg-green-50 transition duration-300">
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;