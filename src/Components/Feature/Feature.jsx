import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <section className="innerWidth padding flex feature">
      <div className="feature-box">
        <i class="fa-solid fa-truck"></i>
        <div className="feature-text">
          <h6>Swift Delivery</h6>
          <p>Your cravings, met in minutes, not hours</p>
        </div>
      </div>
      <div className="feature-box">
        <i class="fa-solid fa-money-bill"></i>
        <div className="feature-text">
          <h6>Reliable Service</h6>
          <p>Trust us to bring your favorites, reliably</p>
        </div>
      </div>
      <div className="feature-box">
        <i class="fa-solid fa-calculator"></i>
        <div className="feature-text">
          <h6>Diverse Menu</h6>
          <p>A feast for every palate, endless choices</p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
