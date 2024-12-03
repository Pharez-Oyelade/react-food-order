import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className=" flex contact-bg">
        <div className="contact-left">
          <div
            className="left-text"
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
              paddingBottom: "20px",
            }}
          >
            <p>
              <strong>Address:</strong>
              <p>415 Lakelock Avenue, AB 37742</p>
            </p>
          </div>
          <div
            className="left-text"
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
              paddingBottom: "20px",
            }}
          >
            <p>
              <strong>Phone:</strong>
              <p>+234 813 774 2724</p>
            </p>
          </div>
          <div className="left-text">
            <p>
              <strong>Email:</strong>
              <p>+support@fooddeliver.ng</p>
            </p>
          </div>
          <button className="normal">Contact us</button>
        </div>

        <div className="contact-right">
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62130353.83962569!2d20.08126559375001!3d18.1115164841353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1703079049707!5m2!1sen!2sng"
            width="600"
            height="448"
            style={{ border: "none" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
