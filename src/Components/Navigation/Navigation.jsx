import React, { useState } from "react";
import "./Navigation.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Navigation = () => {
  return (
    <section className="flex padding innerWidth nav-wrapper">
      <div className="logo">
        <img src="./logo-main bg.png"></img>
      </div>

      <div className="flex nav-links">
        <a href="" className="active">
          Home
        </a>
        <a href="">About</a>
        <a href="">Products</a>
        <a href="" className="hide-nav">
          Features
        </a>
        <a href="" className="hide-nav">
          Contact
        </a>
        <a href="" className="hide-nav">
          Blog
        </a>
      </div>

      <div className="nav-button">
        <button className="normal">Get Menu</button>
      </div>
    </section>
  );
};

export default Navigation;
