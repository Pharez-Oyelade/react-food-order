import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className=" padding innerWidth footer-wrapper">
      <div className="footer-about">
        <h2>Food Deli</h2>
        <p>
          Elevate your dining experience. Quality ingredients, swift delivery.
          Join us in savory culinary excellence. Your satisfaction is our
          commitment.
        </p>
        <div className="footer-socials">
          <a href="#">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>

      <div className="footer-links">
        <h1>Explore</h1>
        <div className="links">
          <div>
            <i className="fa-solid fa-chevron-right"></i>
            <a href="#">Home</a>
          </div>
          <div>
            <i className="fa-solid fa-chevron-right"></i>
            <a href="#">Blog</a>
          </div>
          <div>
            <i className="fa-solid fa-chevron-right"></i>
            <a href="#">Product</a>
          </div>
          <div>
            <i className="fa-solid fa-chevron-right"></i>
            <a href="#">Clients</a>
          </div>
          <div>
            <i className="fa-solid fa-chevron-right"></i>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <h1>Contact info</h1>
        <div className="info-detail">
          <i className="fa-solid fa-location-dot"></i>
          <div className="info-det">
            <h4>Our location:</h4>
            <p>Anderlesent 45, 01623, Nigeria</p>
          </div>
        </div>
        <div className="info-detail">
          <i className="fa-solid fa-phone"></i>
          <div className="info-det">
            <h4>Phones:</h4>
            <p>+234 987 345 2376</p>
            <p>+234 456 874 0987</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
