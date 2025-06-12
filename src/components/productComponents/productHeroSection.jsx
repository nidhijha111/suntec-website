import React, { useState } from "react";

export default function ProductHeroSection() {
  const [insurencetype, setInsurenceType] = useState("buy");
  return (
    <div className="insurance-container">
      <div className="top-section">
        <div className="left-image">
          <img
            src="/assets/images/product_hero_image.png"
            alt="Blue Truck"
            className="responsive-img"
          />
        </div>
        <div className="form-section">
          <div className="heading">
            <div className="main_heading_text">
              <div className="blue">Buy or Renew</div>
              <div className="yellow">goods-carrying</div>
              <div className="blue">vehicle Insurance</div>
            </div>
          </div>

          <div className="button-group">
            <button
              className="btn primary"
              onClick={() => setInsurenceType("buy")}
            >
              Buy
            </button>
            <button
              className="btn secondary"
              onClick={() => setInsurenceType("renew")}
            >
              Renew
            </button>
          </div>

          <div className="form-grid">
            <input
              className="hero_section_input"
              type="text"
              placeholder="Enter Registration No.*"
            />
            {insurencetype === "renew" && (
              <input
                className="hero_section_input"
                type="text"
                placeholder="Enter Policy No."
              />
            )}
            <input
              className="hero_section_input"
              type="email"
              placeholder="Enter Email Address*"
            />
            <input
              className="hero_section_input"
              type="text"
              placeholder="Enter Mobile No.*"
            />
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I accept <a href="#">Terms and Conditions</a>
            </label>
          </div>

          <button className="submit_button">Submit</button>
        </div>
      </div>

      <div className="bottom-section">
        <div className="info-text">
          <div className="main_heading_text">
            <div className="white">Goods-carrying vehicle</div>
            <div className="white">Insurance</div>
          </div>
          <p>
            Commercial Vehicle Insurance is a motor insurance that protects
            vehicles from financial risk – an external damage such as natural
            disasters, accidents, thefts, fire and third-party liabilities.
          </p>
          <p>
            The Motor Vehicles Act of 1988, requires all vehicles including
            goods-carrying vehicles to have Third-Party (TP) damage insurance
            coverage because their large size and heavy loads make them
            vulnerable to various hazards during transportation.
          </p>
        </div>
        <div className="info-image">
          <img
            src="/assets/images/insurence_court_image.png"
            alt="Legal Illustration"
            className="responsive-img"
          />
        </div>
      </div>
    </div>
  );
}
