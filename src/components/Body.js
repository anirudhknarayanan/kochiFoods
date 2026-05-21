import RestuarentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";

const Body = () => {
  const [restList, setrestList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.940843700000002&lng=76.3217567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    let json = await data.json();
    const restaurants =
      json?.data?.cards?.find(
        (item) => item?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    console.log(restaurants);
    setrestList(restaurants);
  };
return (
  <div className="body">

    <div className="top-section">

      <div className="search">
        <input
          type="text"
          placeholder="Search restaurants..."
        />
      </div>

      <div className="topFilter">
        <button>TOP RATING RESTAURANTS</button>
      </div>

    </div>

    <div className="rest-container">
      {restList.map((res) => (
        <RestuarentCard
          key={res.info.id}
          restName={res.info.name}
          rate={res.info.avgRating}
          image={CDN_URL + res.info.cloudinaryImageId}
          time={res.info.sla.slaString}
          cuisines={res.info.cuisines.join(", ")}
        />
      ))}
    </div>

  </div>
);
};

export default Body;
