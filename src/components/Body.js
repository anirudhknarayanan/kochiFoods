import RestuarentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

  const [restList, setrestList] = useState([]);
   const [filterRest,setFilterRest] = useState([])
   const [searchText , setsearchText] = useState("")

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

    setrestList(restaurants);
    setFilterRest(restaurants)
  };


  return restList.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="top-section">
        <div className="search">
          <input type="text" placeholder="Search restaurants..." value={searchText} onChange={(e)=>{
                setsearchText(e.target.value)
          }} />

          <button className="search-btn" onClick={()=>{
               let filter =   restList.filter((rest)=>rest.info.name.toLowerCase().includes(searchText.toLowerCase()))
               setFilterRest(filter)
          }}>Search</button>
        </div>


        <div className="topFilter">

          <button onClick={()=>{
           let topFilter = restList.filter((rest)=>rest.info.avgRating > 4.4)

           setFilterRest(topFilter)

          }}>TOP RATING RESTAURANTS</button>
        </div>
      </div>

      <div className="rest-container">
        {filterRest.map((res) => (
         <Link key={res.info.id} to={"/restaurants/"+res.info.id}><RestuarentCard
            key={res.info.id}
            restName={res.info.name}
            rate={res.info.avgRating}
            image={CDN_URL + res.info.cloudinaryImageId}
            time={res.info.sla.slaString}
            cuisines={res.info.cuisines.join(", ")}
          /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
