import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <section className="innerWidth padding flex description-wrapper">
      <div className="des-left">
        <img src="../img2.jpg" alt="" />
      </div>

      <div className="des-right">
        <div className="des-text">
          <h4>
            Nourish Your Body <span>Savor the Difference</span>
          </h4>
          <p>
            Embark on a culinary adventure with our delectable dishes, where
            every bite tells a story of flavor and freshness. Because
            exceptional taste deserves an extraordinary journey.
          </p>
        </div>
        <div className="des-time">
          <i class="fa-regular fa-clock"></i>
          <p>
            Every Day from <span>08am to 10pm</span>
          </p>
        </div>
        <div class="des-time">
          <i class="fa-solid fa-phone"></i>
          <p>+025 231 841 2765</p>
        </div>
        <div className="des-button">
          <button className="normal">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Description;
