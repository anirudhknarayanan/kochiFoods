import RestuarentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import onlineStatus from "../utils/onlineStatus";
import Offline from "./Offline";

const Body = () => {
  const [restList, setrestList] = useState([]);
  const [filterRest, setFilterRest] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.940843700000002&lng=76.3217567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      const restaurants =
        json?.data?.cards?.find(
          (item) =>
            item?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setrestList(restaurants);
      setFilterRest(restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  const status = onlineStatus();

  if (status === false) {
    return <Offline />;
  }

  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-8 py-6 bg-gray-100 min-h-screen">
      
      {/* Search + Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-8">
        
        {/* Search */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            className="border border-gray-300 px-4 py-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            onClick={() => {
              const filter = restList.filter((rest) =>
                rest.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilterRest(filter);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Filter */}
        <div>
          <button
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
            onClick={() => {
              const topFilter = restList.filter(
                (rest) => rest.info.avgRating > 4.4
              );

              setFilterRest(topFilter);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filterRest.map((res) => (
          <Link
            key={res.info.id}
            className="hover:scale-95 transition duration-300"
            to={"/restaurants/" + res.info.id}
          >
            <RestuarentCard
              restName={res.info.name}
              rate={res.info.avgRating}
              image={CDN_URL + res.info.cloudinaryImageId}
              time={res.info.sla.slaString}
              cuisines={res.info.cuisines.join(", ")}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;