import React, { useState } from "react";
import "./Header.css";
import { LOGO_IMAGE } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Header() {
  const [btnName, setbtnName] = useState("LogIn");
  return (
    <div className="header">
      <div className="header-comp">
        <Link to="/">
          
          <img src={LOGO_IMAGE} alt="" />
        </Link>
      </div>
      <div className="header-comp">
        <div className="all-key">
          <Link to="/">Home</Link>
        </div>
        <div className="all-key">
          <Link to="about">About Us</Link>
        </div>
        <div className="all-key">Contact Us</div>
        <div className="all-key">Cart</div>
        <button
          className="all-key"
          onClick={() => {
            btnName === "LogIn" ? setbtnName("LogOut") : setbtnName("LogIn");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
}
