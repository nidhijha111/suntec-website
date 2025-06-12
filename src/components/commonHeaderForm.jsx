import React, { useState } from "react";

export default function CommonHeaderForm({ headerText }) {
  const [selectedType, setSelectedType] = useState("commercial");
  const insuranceTypes = [
    {
      id: "commercial",
      label: (
        <>
          Commercial <br /> Vehicle
        </>
      ),
      icon: "/assets/images/commerical_vical_icon.svg", // Replace with your local image path
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
    <div>
      <div className="hero-common-section">
        {headerText && (
          <>
            <div className="main_heading_text">
              <div className="blue">Buy or Renew</div>
              <div className="yellow">Insurance</div>
            </div>
            <div className="margin-bottom"></div>
          </>
        )}

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
            {(selectedType === "car" || selectedType === "bike") && (
              <select className="hero_section_input" defaultValue="">
                <option>Select vehicle Type*</option>
                <option>Normal</option>
                <option>EV</option>
              </select>
            )}
            {selectedType === "commercial" && (
              <select className="hero_section_input" defaultValue="">
                <option>Select vehicle Type*</option>
                <option>GCCV</option>
                <option>PCCV</option>
              </select>
            )}

            {selectedType === "other" && (
              <select className="hero_section_input" defaultValue="">
                <option>Select Product Type*</option>
                <option>Marine Insurance</option>
                <option>Aviation Insurance</option>
                <option>Home Insurance</option>
                <option>Travel Insurance</option>
                <option>Personal Accident Insurance</option>
                <option>Public Liability Insurance</option>
                <option> Fidelity Guarantee Insurance</option>
                <option>Cyber Crime Insurance</option>
                <option> Life Insurance</option>
              </select>
            )}
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
            <input type="checkbox" className="checkbox_input" id="terms" />
            <label htmlFor="terms">
              I accept <a href="#">Terms and Conditions</a>
            </label>
          </div>

          <button type="submit" className="submit_button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
