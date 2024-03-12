import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-wrapper">
      <div className="flex padding innerWidth newsletter-content">
        <div>
          <h2>
            <span>Subscribe</span> to our newsletter
          </h2>
          <p>
            Stay in the loop with exclusive offers and culinary updates.
            Subscribe to our newsletter for a flavourful inbox experience. Join
            now!
          </p>
        </div>

        <div className="news-form">
          <form action="#">
            <input
              type="email"
              placeholder="Your email ..."
              className="news-input"
              required
            />
            <input type="submit" value="Subscribe" className="news-btn" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
