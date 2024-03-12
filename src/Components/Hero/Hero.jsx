import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="innerWidth padding hero-text">
        <h4>Savor the difference</h4>
        <h2>Delivered to Your Doorstep</h2>
        <p>
          Indulge in a culinary journey with our diverse menu, crafted for food
          enthusiasts who crave convenience without compromising on taste
        </p>

        <div className="innerWidth hero-button">
          <button className="normal">Read More</button>
          <button className="normal primary">View plans</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
