import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-wrapper">
      <div className="flex details">
        <div className="detail">
          <img src="../detail/diet (1).png" alt="Only natural food" />
          <h6>Natural Food</h6>
          <p>Fresh ingredients for a healthier, tastier experience.</p>
        </div>
        <div className="detail">
          <img src="../detail/eco-food.png" alt="Various dishes" />
          <h6>Various Dishes</h6>
          <p>Explore a world of culinary delights, endless variety</p>
        </div>
        <div className="detail">
          <img src="../detail/coffee-bag.png" alt="handy packaging" />
          <h6>Handy Packaging</h6>
          <p>Your meals, neatly packed for convenience and freshness</p>
        </div>
        <div className="detail">
          <img src="../detail/salad.png" alt="Various dishes" />
          <h6>Savor & Share</h6>
          <p>Enjoy exclusive deals and share the joy</p>
        </div>
      </div>
    </section>
  );
};

export default About;
