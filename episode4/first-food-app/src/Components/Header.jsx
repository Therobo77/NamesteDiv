import React, { useState } from 'react'
import "./Header.css"
import { LOGO_IMAGE } from '../utils/constants'



export default function Header() {
  const [btnName, setbtnName] = useState("LogIn")
  return (
    <div className='header'>
        <div className="header-comp">
            <img src={LOGO_IMAGE} alt="" />
        </div>
        <div className="header-comp">
            <div className="all-key">Home</div>
            <div className="all-key">About Us</div>
            <div className="all-key">Contact Us</div>
            <div className="all-key">Cart</div>
            <button className="all-key" onClick={()=>{
              btnName==="LogIn"?setbtnName("LogOut"):setbtnName("LogIn")
            }}>{btnName}</button>
        </div>
    </div>
  )
}
