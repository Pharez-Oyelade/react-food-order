import React from "react";
import "./Navigation.css";

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
        <a href="">Features</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
      </div>

      <div>
        <button className="normal">Get Menu</button>
      </div>
    </section>
  );
};

export default Navigation;
