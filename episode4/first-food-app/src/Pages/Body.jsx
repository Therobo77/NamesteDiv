import React, { useState } from "react";
import RestaurantCard from "../Components/RestaurantCard";
import "./Body.css";
import { allrestaurants } from "../utils/constants";

const Body = () => {
  const [restaurantdata, setRestaurantdata] = useState(allrestaurants);
  //   const filterFun= () =>{
  // console.log(allrestaurants.length) //
  //   }
  return (
    <div>
      <div className="search-and-filter">
        <button
          onClick={() => {
            //  filterFun
            // console.log(allrestaurants.length)
            let filterlist= allrestaurants.filter(
              (res)=>res.rating > 4 )
              setRestaurantdata(filterlist)
          }}
        >
          Filter by +4 Rating
        </button>
        <button onClick={()=>{
          setRestaurantdata(allrestaurants)
        }}>Reset</button>
      </div>
      <div className="restaurant-card">
        {restaurantdata.map((el, i) => {
          return <RestaurantCard key={i} resdata={el} />;
        })}
      </div>
    </div>
  );
};

export default Body;
