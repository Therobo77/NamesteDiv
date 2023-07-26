import React from 'react'
import "./Header.css"
export default function Header() {
  return (
    <div className='header'>
        <div className="header-comp">
            <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-app-by-town-brandcrowd.png" alt="" />
        </div>
        <div className="header-comp">
            <div className="all-key">Home</div>
            <div className="all-key">About Us</div>
            <div className="all-key">Contact Us</div>
            <div className="all-key">Cart</div>
        </div>
    </div>
  )
}
