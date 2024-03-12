import React, { useState } from "react";
import "./Choice.css";
import Select from "react-select"; //for customised select box

const options = [
  { value: "", label: "None" },
  { value: 1, label: "Slimming Menu" },
  { value: 2, label: "Muscle Gain Menu" },
  { value: 3, label: "Balanced Menu" },
]; // creating option data for the select box

function MyComponent() {
  //creating the select component
  const [selectedValue, setSelectedValue] = useState(null); // Initially selected value is null

  const handleChange = (newValue) => {
    if (newValue.value === "") {
      setSelectedValue(null);
    } else {
      setSelectedValue(newValue); // Update state for other selections
    }
  };

  return (
    <div>
      <section className="delivery-wrapper">
        <div className="flex padding innerWidth delivery-content">
          <div className="del-left">
            <div className="del-text">
              <h1>
                <span>Free delivery</span> every day at your convenience
              </h1>
              <p>
                The Luxury of free daily delivery tailored to your schedule.
                Enter your details, choose your menu plan and elevate your
                dining experience effortlessly with a click. Your culinary
                journey awaits!
              </p>
            </div>

            <div className="del-form">
              <form action="#">
                <input type="text" placeholder="Your name" required />
                <input type="email" placeholder="E-mail" required />
                <input
                  type="text"
                  placeholder="Phone number"
                  style={{ height: "55px" }}
                />
                <Select
                  value={selectedValue} // Set the initially selected value (optional)
                  options={options}
                  onChange={handleChange}
                  placeholder="Choose Nutrition Plan"
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      border: "none",
                      paddingLeft: "20px",
                      borderRadius: "20px",
                      height: "55px",
                    }),
                  }}
                />
                <button className="form-btn">Get Menu</button>
              </form>
            </div>
          </div>

          <div className="del-right">
            <img src="../form-bg.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyComponent;
