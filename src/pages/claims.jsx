import React, { useState } from "react";
import "../styles/claims.scss";
import BottomTopScrollSection from "../components/bottomTopScrollSection";

export default function Claims() {
  const [selectedType, setSelectedType] = useState("commercial");
  const insuranceTypes = [
    {
      id: "commercial",
      label: (
        <>
          Commercial <br /> Vehicle
        </>
      ),
      icon: "/assets/images/commerical_vical_icon.svg", 
    },
    {
      id: "car",
      label: (
        <>
          Car <br /> Insurance
        </>
      ),
      icon: "/assets/images/hero_car_image.svg",
    },
    {
      id: "bike",
      label: (
        <>
          Bike <br /> Insurance
        </>
      ),
      icon: "/assets/images/bike_insurence_icon.svg",
    },
    {
      id: "other",
      label: (
        <>
          Other
          <br /> Categories
        </>
      ),
      icon: "/assets/images/other_categories_icon.svg",
    },
  ];
  return (
    <div className="container">
      <div className="claim_settalement_section">
        <div className="main_heading_text">
          <div className="blue">Facilitating faster</div>
          <div className="yellow">settlements claim</div>
        </div>
        <div className="line_wrapper"></div>
        <div className="insurance-types">
          {insuranceTypes.map((type) => (
            <div
              key={type.id}
              className={`type-option ${
                selectedType === type.id ? "active" : ""
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              <div className="icon-wrapper">
                <img src={type.icon} alt={"services icon"} />
              </div>
              <div className="label">{type.label}</div>
            </div>
          ))}
        </div>
        <form className="insurance-form">
          <div className="form_input_wrapper">
            <input
              type="text"
              className="hero_section_input"
              placeholder="Enter Registration No.*"
            />
            <input
              type="text"
              className="hero_section_input"
              placeholder="Enter Policy No.*"
            />
            <input
              type="text"
              className="hero_section_input"
              placeholder="Enter Mobile No.*"
            />
            <input
              type="email"
              className="hero_section_input"
              placeholder="Enter Email Address*"
            />
          </div>

          <div className="terms">
            <div>
              <input type="checkbox" className="checkbox_input" id="terms" />
              <label htmlFor="terms">
                I accept <a href="#">Terms and Conditions</a>
              </label>
            </div>
            <div>
              <button type="submit" className="submit_button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <BottomTopScrollSection />
      <div className="claim-help-section">
        <div>
          <div className="main_heading_text">
            <div className="yellow"> We are here to</div>
            <div className="blue">help you settle</div>
            <div className="yellow">claims faster.</div>
          </div>
        </div>
        <div>
          <img src="./assets/images/setting_image.png" alt="service  image" />
        </div>
        <div className="button-wrapper">
          <button className="border-button">
            <div className="blue">Connect with us</div>
            <div className="yellow"> for support</div>
          </button>
          <button className="phone-button">
            <img src="./assets/images/phone_icon.png" alt="phone icon" />
            <span>Toll Free 9810000000</span>
          </button>
          <button className="email-button">
            <img
              src="./assets/images/blue_message_icon.png"
              alt="messages icon"
            />
            <span>support@suntecinsurance.com</span>
          </button>
        </div>
      </div>
      <BottomTopScrollSection />
    </div>
  );
}
