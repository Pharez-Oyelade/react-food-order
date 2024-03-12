import React from "react";
import "./Menu.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Menu = () => {
  return (
    <section className="menu-wrapper">
      <div className="menu-head">
        <h4>Our Menu</h4>
        <h2>Popular Dishes</h2>
      </div>
      <div className="head-txt">
        <p>
          Discover culinary excellence with our Popular Dishes. From the robust
          flavors of steak and tender rabbit soup to the refreshing salads, each
          dish is a gastronomic journey crafted for indulgence.
        </p>
      </div>

      <Swiper {...sliderSettings} modules={[Autoplay]} autoplay={true}>
        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="menu-card">
              <img src={card.image} alt="home" />

              <div className="menu-txt">
                <h4>{card.name}</h4>
                <span>{card.detail}</span>

                <span className="menu-price">
                  <span>$</span>
                  <span>{card.price}</span>
                </span>

                <div className="menu-button">
                  <button className="normal">Add to cart</button>
                  <button className="clear">Read More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Menu;
