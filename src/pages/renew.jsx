import React from "react";
import CommonHeaderForm from "../components/commonHeaderForm";
import "../styles/renew.scss";

export default function Renew() {
  return (
    <div className="container">
      <div className="insurance-renewal-page">
        <div className="left-panel">
          <h1>Commercial Vehicle Insurance</h1>
          <div className="divider"></div>
          <h2>Renew your policy</h2>

          <div className="assistance-section">
            <img
              src="./assets/images/truck_image.png"
              alt="Commercial Vehicle Truck"
              className="truck-illustration"
            />
            <div className="assistance-text">
              <h3>Need assistance with Renewals?</h3>
              <p>Call or write to us</p>
            </div>
          </div>

          <div className="contact-buttons">
            <button className="phone-button">
              <img src="./assets/images/phone_icon.png" alt="phone icon" />
              <span>Toll Free 9810000000</span>
            </button>
            <button className="email-button">
              <img
                src="./assets/images/message_icons.png"
                alt="messages icon"
              />
              <span>support@suntecinsurance.com</span>
            </button>
          </div>
        </div>
        <div className="right-panel ">
          <CommonHeaderForm />
        </div>
      </div>
    </div>
  );
}
