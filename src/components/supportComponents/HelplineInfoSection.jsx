import React from "react";

export default function HelplineInfoSection() {
  return (
    <div className="help-line-info-section">
      <div className="info-card-wrapper">
        <div className="info-heading-text"> Helpline numbers</div>
        <div className="contact-info-text">
          <img src="./assets/images/phone_blue_icon.svg" alt="messages icon" />
          <span className="blue"> Toll Free</span>
          <span>00000000000 98100</span>
        </div>
        <div className="contact-info-text">
          <img src="./assets/images/phone_blue_icon.svg" alt="messages icon" />
          <span className="blue">Landline</span>
          <span>02245197023</span>
        </div>
      </div>
      <div className="info-card-wrapper">
        <div className="info-heading-text"> Write to us</div>
        <div className="contact-info-text">
          <img src="./assets/images/email_blue_icon.svg" alt="email icon" />
          <span className="blue"> Support</span>
          <span> care@suntecinsurance.com</span>
        </div>
        <div className="contact-info-text">
          <img src="./assets/images/email_blue_icon.svg" alt="email icon" />
          <span className="blue">Sales</span>
          <span>sales@suntecinsurance.com</span>
        </div>
      </div>
      <div className="info-card-wrapper">
        <div className="info-heading-text"> Registered office address</div>
        <p>
          B 206, nd Floor, Eastern Business District, Lal Bahadur Shastri Marg,
          Bhandup West, Mumbai, Maharashtra 400078
        </p>
      </div>
      <div className="location-info-cards">
        <div className="location-heading-text"> Service locations</div>
        <ul className="location-items">
          <li>Delhi/NCR</li>
          <li>Maharashtra</li>
          <li>Madhya Pradesh</li>
        </ul>
      </div>
    </div>
  );
}
