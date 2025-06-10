import React from "react";

export default function HowdoweWork() {
  return (
    <section className="how_we_work_section">
      <div className="main_heading_text blue"> How do we Work?</div>
      <div className="heading_underline_border"></div>
      <div className="heading_para">
        At Suntec Insurance, excellent service means being fast, clear, and
        consistent from the beginning to facilitating claims. From the
        onboarding phase to claims handling, every part of our process is built
        around your convenience. Here’s how we make it work for you.
      </div>
      <div className="our_work_conatiner">
        <div className="our_work_card_wrapper">
          <div className="our_work_card">
            <div className="our_wor_icon_wrapper">
              <img
                src="./assets/images/understanding_bussiness_need_icon.svg"
                alt="understanding_bussiness_need_icon"
              />
            </div>
            <div>
              Understanding <br /> your business needs
            </div>
          </div>
        </div>
        <div className="our_work_card_wrapper">
          <div className="our_work_card">
            <div className="our_wor_icon_wrapper">
              <img
                src="./assets/images/helping_&_understanding_icon.svg"
                alt="helping_&_understanding_icon"
              />
            </div>
            <div>
              Helping you <br /> understand the <br />
              right coverage
            </div>
          </div>
        </div>
        <div className="our_work_card_wrapper">
          <div className="our_work_card">
            <div className="our_wor_icon_wrapper">
              <img
                src="./assets/images/onbording_icon.svg"
                alt="helping_&_understanding_icon"
              />
            </div>
            <div>
              {" "}
              Onboarding <br />
              made easy
            </div>
          </div>
        </div>
        <div className="our_work_card_wrapper">
          <div className="our_work_card">
            <div className="our_wor_icon_wrapper">
              <img
                src="./assets/images/smart_documentation_icon.svg"
                alt="onbording_icon"
              />
            </div>
            <div>
              {" "}
              Smart <br /> documentation
            </div>
          </div>
        </div>
        <div className="our_work_card_wrapper">
          <div className="our_work_card">
            <div className="our_wor_icon_wrapper">
              <img
                src="./assets/images/timely_action_icon.svg"
                alt="smart_documentation_icon"
              />
            </div>
            <div>
              {" "}
              Timely <br /> action
            </div>
          </div>
        </div>
        <div className="our_work_card_wrapper">
          <div className="our_work_card">
            <div className="our_wor_icon_wrapper">
              <img
                src="./assets/images/hassle_free_claims_icon.svg"
                alt="insurance icon"
              />
            </div>
            <div>
              Hassle-free <br /> claims
            </div>
          </div>
        </div>
      </div>
      <div className="our_work_some_info_wrapper">
        <div>
          Disclaimer : Suntec Insurance Broking Private Limited acts solely as a
          facilitator. The final decision on claim settlement rests entirely
          with the respective insurer. For complete details on risk factors,
          terms and conditions, please refer to the insurer’s sales brochure
          before making a purchase. Standard terms and conditions apply.
        </div>
        <div>
          Disclaimer : Suntec Insurance Broking Private Limited does not
          endorse, rate or recommend any particular insurer or any Insurance
          product offered by any insurer.
        </div>
      </div>
      <div className="our_location_warapper_section">
        <div className="map_image_wrapper">
          <img src="./assets/images/map_image.png" alt="map_image" />
        </div>
        <div className="work_info_wrapper">
          <div className="main_heading_text yellow"> Our Presence</div>
          <div>
            Suntec Insurance is strategically positioned to support businesses
            where it matters most.
          </div>
          <div>
            Our presence in Delhi NCR, Maharashtra, and Madhya Pradesh enables
            us to deliver Insurance services that transform business operations
            through service excellence, speed, and accountability.
          </div>
        </div>
      </div>
    </section>
  );
}
