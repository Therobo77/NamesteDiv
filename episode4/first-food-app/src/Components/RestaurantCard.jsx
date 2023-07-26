import React from 'react'
import "./RestaurantCard.css"

const RestaurantCard = (props) => {
  console.log(props.resdata)
  const {name,rating,phone,cuisine}=props.resdata
  return (
    <div className="res-Card">
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bukjrfweyep4wna1ygkq" alt="" />
      <h2>{name}</h2>
      <h4>{`${rating} Star`}</h4>
      <h4>{phone}</h4>
      <h4>{cuisine.join(",")}</h4>
    </div>
  )
}

export default RestaurantCard