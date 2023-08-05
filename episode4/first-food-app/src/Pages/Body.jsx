import React, { useEffect, useState } from "react";
import RestaurantCard from "../Components/RestaurantCard";
import "./Body.css";
// import { allrestaurants } from "../utils/constants";
import Shinner from "./Shinner";

const Body = () => {
  const [restaurantdata, setRestaurantdata] = useState([]);
  const [filterdata, setfilterdata] = useState([]);
  const [searchdata, setsearchdata] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let jsondata = await data.json();
    setRestaurantdata(jsondata.products);
    setfilterdata(jsondata.products);
    // console.log(jsondata);
  };
  return (
    <div>
      <div className="search-and-filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search Here"
            value={searchdata}
            onChange={(e) => setsearchdata(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(restaurantdata[0].title);
              let filterlist = restaurantdata.filter((res) => {
                return res.title
                  .toLowerCase()
                  .includes(searchdata.toLowerCase());
              });
              setfilterdata(filterlist);
            }}
          >
            Search
          </button>
        </div>
        <br />
        <div className="filter">
          <button
            onClick={() => {
              //  filterFun
              // console.log(allrestaurants.length)
              let filterlist = restaurantdata.filter(
                (res) => res.rating >= 4.5
              );
              setRestaurantdata(filterlist);
            }}
          >
            Top Rated
          </button>
          <button
            onClick={() => {
              setRestaurantdata(restaurantdata);
            }}
          >
            Reset
          </button>
        </div>
        <br />
      </div>
      <div className="restaurant-card">
        {restaurantdata.length === 0 ? (
          <Shinner />
        ) : (
          filterdata.map((el, i) => {
            return <RestaurantCard key={i} resdata={el} />;
          })
        )}
      </div>
    </div>
  );
};

export default Body;
