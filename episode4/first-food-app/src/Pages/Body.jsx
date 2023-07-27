import React from "react";
import RestaurantCard from "../Components/RestaurantCard";
import "./Body.css"
import { allrestaurants } from "../utils/constants";

const Body = () => {
  

  // console.log(allrestaurants);
  return (
    <div>
      <div className="search-bar">Search</div>
      <div className="restaurant-card">
        {allrestaurants.map((el, i) => {
          return <RestaurantCard key={i} resdata={el} />;
        })}
      </div>
    </div>
  );
};

export default Body;
