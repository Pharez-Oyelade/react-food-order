import React from "react";
import "./Order.css";
import { color } from "framer-motion";

const Order = () => {
  return (
    <section className="innerWidth padding order-wrapper">
      <div className="flex order-meal">
        <div className="flex first-meal">
          <div className="meal-img">
            <img
              src="../food/Noodle_Soup-removebg-preview.png"
              alt="Noodle Soup"
            />
          </div>

          <div className="meal-des">
            <h4>Shrimp and Egg Noodle Soup</h4>
            <p>
              This classic dish features succulent shrimp, springy egg noodles,
              and a rich, savory broth. Every bite is a delicious combination of
              textures and flavors, perfect for a satisfying and heartwarming
              meal.
            </p>
            <div className="nutri-detail">
              <div className="nutri-info">
                <p>
                  <b>Energy: </b>
                  <span style={{ color: "red", fontWeight: 700 }}>
                    350 kcal
                  </span>
                </p>
              </div>
              <div className="nutri-info">
                <b>Protein: </b>
                <span style={{ color: "var(--green)", fontWeight: 700 }}>
                  25 g
                </span>
              </div>
              <div className="nutri-info">
                <b>Fat: </b>
                <span style={{ color: "var(--green)", fontWeight: 700 }}>
                  15 g
                </span>
              </div>
              <div className="nutri-info">
                <b>Carbohydrate: </b>
                <span style={{ color: "var(--green)", fontWeight: 700 }}>
                  10 g
                </span>
              </div>
            </div>

            <div className="meal-buttons">
              <button className="normal">Order</button>
              <button className="normal primary">Read More</button>
            </div>
          </div>
        </div>

        <div className="flex second-meal">
          <div className="meal-des">
            <h4>Greek Salad</h4>
            <p>
              This vibrant dish is a medley of chopped tomatoes, cool cucumbers,
              sliced red onions, salty olives, and crumbles of creamy feta
              cheese. All tossed together in a simple dressing, it's a burst of
              freshness and flavor in every bite!
            </p>
            <div className="nutri-detail">
              <div className="nutri-info">
                <p>
                  <b>Energy: </b>
                  <span style={{ color: "red", fontWeight: 700 }}>
                    350 kcal
                  </span>
                </p>
              </div>
              <div className="nutri-info">
                <b>Protein: </b>
                <span style={{ color: "var(--green)", fontWeight: 700 }}>
                  25 g
                </span>
              </div>
              <div className="nutri-info">
                <b>Fat: </b>
                <span style={{ color: "var(--green)", fontWeight: 700 }}>
                  15 g
                </span>
              </div>
              <div className="nutri-info">
                <b>Carbohydrate: </b>
                <span style={{ color: "var(--green)", fontWeight: 700 }}>
                  10 g
                </span>
              </div>
            </div>

            <div className="meal-buttons">
              <button className="normal">Order</button>
              <button className="normal primary">Read More</button>
            </div>
          </div>

          <div className="meal-img">
            <img
              src="../food/greek-cheese.png"
              alt="ceasar salad with bread and bacon"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
