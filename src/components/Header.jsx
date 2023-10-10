import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {

    const StyleLink ={
     textDecoration : "none",
     color : "#161616"
    }

  return (
    <>
      <div className="header-container">
        <NavLink to="/" style={StyleLink} > <h2 className="home-link">SNEAKERS</h2> </NavLink>
        <NavLink style={StyleLink} to="collection">Collection</NavLink>
        <NavLink style={StyleLink} to="men">Men</NavLink>
        <NavLink style={StyleLink} to="women">Women</NavLink>
        <div className="header-icon">

          <NavLink to="shopingcart" > <FaShoppingBasket/> </NavLink>
        </div>
      </div>
    </>
)}