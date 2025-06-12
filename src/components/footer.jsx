import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer_link_wrapper">
          <div className="footer_head_link">About Us</div>

          <div className="footer_link" onClick={() => navigate("/about")}>Our Story</div>
          <div className="footer_link" onClick={() => navigate("/about")}>Careers</div>
        </div>
        <div className="footer_link_wrapper">
          <div className="footer_head_link">Motor Insurance</div>

          <div className="footer_link">Goods Carrying Vehicle Insurance</div>
          <div className="footer_link">
            Passenger Carrying Vehicle Insurance
          </div>
          <div className="footer_link">Car Insurance</div>
          <div className="footer_link">Bike Insurance</div>
          <div className="footer_head_link">Marine & Aviation Insurance</div>
          <div className="footer_head_link">Life Insurance</div>
        </div>
        <div className="footer_link_wrapper">
          <div className="footer_head_link"> Other Categories</div>

          <div className="footer_link">Home Insurance</div>
          <div className="footer_link"> Business Insurance</div>
          <div className="footer_link"> Health & Group Medical Insurance</div>
          <div className="footer_link"> Personal Accident Insurance</div>
          <div className="footer_link"> Public Liability Insurance</div>
          <div className="footer_link"> Fidelity Guarantee Insurance</div>
          <div className="footer_link"> Cyber Crime Insurance</div>
        </div>
        <div className="footer_link_wrapper">
          <div className="footer_head_link">Office Address</div>
          <div>
            B 206, 2nd Floor, Eastern Business District, Lal Bahadur Shastri
            Marg, Bhandup West, Mumbai, Maharashtra 400078
          </div>
          <div>
            <span className="bold-text">Toll Free</span> 00000000000 98100
          </div>
          <div>
            <span className="bold-text">Landline</span> 022 45197023
          </div>
          <div className="footer_head_link">Email</div>
          <div>Support : care@suntecinsurance.com</div>
          <div>Sales : sales@suntecinsurance.com</div>
          <div className="footer_icon_wrapper">
            <img src="./assets/images/instagram_icon.png" alt="intagram icon" />
            <img src="./assets/images/facebook_icon.png" alt="facebook icon" />
            <img src="./assets/images/linkdin_icon.png" alt="linkdin icon" />
            <img src="./assets/images/youtube_icon.png" alt="youtube icon" />
          </div>
        </div>
      </div>
      <div>
        <div className="footer_info_text_wrapper">
          <img src="./assets/images/dot_icon.png" alt="dot icon" /> Suntec
          Insurance Broking Private Limited <span className="red">CIN : U74999HR2014PTC053454</span>,
          Registered Office : B 206, 2nd Floor, Eastern Business District, Lal
          Bahadur Shastri Marg, Bhandup West, Mumbai, Maharashtra 400078, Tel
          No. : 022 45197023 I Email ID : care@suntecinsurance.com
        </div>
        <div className="spacing-top"></div>
        <div className="footer_info_text_wrapper">
          <img src="./assets/images/dot_icon.png" alt="dot icon" /> Suntec
          Insurance is registered as a Direct Insurance Broker (Life and
          General) I Registration No.1044, Valid till 03/03/2028, Registration
          Code IRDAI/DB1159/2024, License category : Direct Insurance Broker
          (Life and General)
        </div>
        <div className="spacing-top"></div>
        <div className="footer_info_text_wrapper">
          <img src="./assets/images/dot_icon.png" alt="dot icon" /> Disclaimer :
          Suntec Insurance Broking Private Limited acts solely as a facilitator.
          The final decision on claim settlement rests entirely with the
          respective insurer. For complete details on risk factors, terms and
          conditions, please refer to the insurer’s sales brochure before making
          a purchase. Standard terms and conditions apply.
        </div>
        <div className="footer_info_text_wrapper">
          <img src="./assets/images/dot_icon.png" alt="dot icon" />
          Disclaimer : Suntec Insurance Broking Private Limited does not
          endorse, rate or recommend any particular insurer or any insurance
          product offered by any insurer.
        </div>
        <div className="footer_info_text_wrapper">
          <img src="./assets/images/dot_icon.png" alt="dot icon" />
          Disclaimer : The information provided on our website is intended to
          offer an overview of Insurance products and services. For complete and
          detailed information, please refer to the respective insurer’s
          official website and product documents.
        </div>
        <div className="spacing-top"></div>
        <div className="footer_info_text_wrapper">
          <img src="./assets/images/dot_icon.png" alt="dot icon" /> Visitors are
          hereby informed that their information submitted on the website may be
          shared with insurers.
        </div>
        <div className="footer_info_text_wrapper">
          BEWARE OF SPURIOUS PHONE CALLS AND FICTITIOUS/FRAUDULENT OFFERS
        </div>
      </div>
      <p className="copyright footer_info_text_wrapper">
        © Copyright 2026 - 2025 suntecinsurance.com. All Rights Reserved I Sitemap I FAQ’S
      </p>
    </footer>
  );
}
