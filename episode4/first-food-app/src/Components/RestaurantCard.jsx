import React from 'react'
import "./RestaurantCard.css"
import { FOOD_IMAGE_URL } from '../utils/constants'

const RestaurantCard = (props) => {
  console.log(props.resdata)
  const {name,rating,phone,cuisine}=props.resdata
  return (
    <div className="res-Card">
      <img src={FOOD_IMAGE_URL} alt="" />
      <h2>{name}</h2>
      <h4>{`${rating} Star`}</h4>
      <h4>{phone}</h4>
      <h4>{cuisine.join(",")}</h4>
    </div>
  )
}

export default RestaurantCard