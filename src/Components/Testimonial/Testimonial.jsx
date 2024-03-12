import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import data from "../../utils/testimonial.json";
// import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/testimonial";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section>
      <div className="test-head">
        <div className="menu-head">
          <h4>Testimonials</h4>
          <h2>What our customers say</h2>
        </div>
      </div>

      <Swiper {...sliderSettings} modules={[Autoplay]} autoplay={true}>
        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="test-card">
              <div className="test-text">
                <i
                  className="fa-solid fa-quote-left"
                  style={{ color: "#8ec137" }}
                ></i>
                <span>{card.comment}</span>
              </div>

              <div className="test-img">
                <img src={card.image} alt={card.name} />
                <h4>{card.name}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
