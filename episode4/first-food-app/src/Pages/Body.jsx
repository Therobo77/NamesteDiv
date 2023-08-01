import React, { useEffect, useState } from "react";
import RestaurantCard from "../Components/RestaurantCard";
import "./Body.css";
// import { allrestaurants } from "../utils/constants";
import Shinner from "./Shinner";

const Body = () => {
  const [restaurantdata, setRestaurantdata] = useState([]);
  //   const filterFun= () =>{
  // console.log(allrestaurants.length) //
  //   }

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let jsondata = await data.json();
    setRestaurantdata(jsondata.products);
    // console.log(jsondata);
  };
  return (
    <div>
      <div className="search-and-filter">
        <button
          onClick={() => {
            //  filterFun
            // console.log(allrestaurants.length)
            let filterlist = restaurantdata.filter((res) => res.rating >= 4.5);
            setRestaurantdata(filterlist);
          }}
        >
          Filter by 3-4 Rating
        </button>
        <button
          onClick={() => {
            setRestaurantdata(restaurantdata);
          }}
        >
          Reset
        </button>
      </div>
      <div className="restaurant-card">
        {restaurantdata.length === 0 ? (
          <Shinner />
        ) : (
          restaurantdata.map((el, i) => {
            return <RestaurantCard key={i} resdata={el} />;
          })
        )}
      </div>
    </div>
  );
};

export default Body;
