import React from "react";
import "./RestaurantCard.css";
// import { FOOD_IMAGE_URL } from '../utils/constants'
/*
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ]
},*/
const RestaurantCard = (props) => {
  // console.log(props.resdata);
  const { title, brand, category, rating, description, thumbnail } =
    props.resdata;
  return (
    <div className="res-Card">
      <img src={thumbnail} alt="" />

      <p>{` ${brand} --->${title}`}</p>
      <p>{`${rating} Star --->${category}`}</p>
      {/* <p>{category}</p> */}
      <p>{description}</p>
    </div>
  );
};

export default RestaurantCard;
