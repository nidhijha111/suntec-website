import React from "react";
import '../styles/about.scss';

export default function Aboutus() {
  return (
    <div className="container">
    <div className="our-story-page">
      <section className="header-story-section">
        <div className="image-container">
          <img
            src="./assets/images/about_us_hero_banner.png"
            alt="Logistics and insurance concept with model vehicles and laptop"
          />
        </div>
        <div className="text-container">
          <div className="main_heading_text blue">Our story</div>
          <div className="divider"></div>
        </div>
      </section>

      {/* Section 2: The Beginning */}
      <section className="services_section">
        <div className="image-container">
          <img src={"./assets/images/begnning_section_truck_icon.png"} alt="Line art of a commercial truck and van" />
        </div>
        <div className="text-container blue-bg">
          <h2 className="title-yellow">The beginning</h2>
          <div className="divider"></div>
          <p>
            Insurance has always meant more than just policies - it's about
            peace of mind, knowing you'll have support when challenges arise.
            Since 2016, we've focused on understanding what truly matters to
            policyholders beyond the paperwork. Over the years, this insight has
            shaped the way we serve - placing clarity, empathy, and speed at the
            core.
          </p>
          <p>
            We realised the true value of insurance lies in the support that
            follows. For us, commercial insurance is about providing the right
            information so you can make informed decisions and choose coverage
            that fits your business. In the logistics and transport sector,
            commercial vehicle insurance comes with its own set of
            challenges—complex claims, unclear documentation, and unexpected
            costs. This led to the founding of Suntec Insurance Broking Pvt.
            Ltd. in 2025, to simplify, accelerate, and a more customer-centric
            approach to commercial logistics insurance.
          </p>
          <p>
            Through faster claim settlements and responsive support, we help
            businesses move beyond just buying a policy - towards true assurance
            and peace of mind.
          </p>
        </div>
      </section>

      <div className="disclaimer-bar">
        <p>
          Disclaimer : Suntec Insurance Broking Private Limited acts solely as a
          facilitator. The final decision of claim settlement rest entirely with
          the respective insurer. For complete details on risk factors, terms
          and conditions, please refer to the insurer's sales brochure before
          making a purchase. Standard terms and conditions apply.
        </p>
        <p>
          Disclaimer : Suntec Insurance Broking Private Limited does not
          endorse, rate or recommend any particular insurer or any insurance
          product offered by any insurer.
        </p>
      </div>

      {/* Section 3: Why we do what we do? */}
      <section className="story-section">
        <div className="image-container">
          <img
            src={"./assets/images/about_why_we_do_image.png"}
            alt="Smartphone showing a 'Service' screen for insurance"
          />
        </div>
        <div className="text-container">
          <h2 className="title-blue">
            Why we do <br />
            <span className="title-yellow">what we do?</span>
          </h2>
          <div className="divider"></div>
          <p>
            Navigating commercial vehicle insurance - especially in the
            logistics sector - isn't as simple as choosing a policy and moving
            on. Insuring trucks, buses, or goods carriers involves layers of
            legal processes, assessments, and heavy documentation. And when an
            accident happens, transport businesses often pay out of pocket to
            stay operational - long before a claim is processed. This delay
            isn't just frustrating; it disrupts the very backbone of logistics.
          </p>
          <p>
            At Suntec Insurance, we provide awareness of all the products,
            helping you make informed choices that safeguard your business every
            step of the way.
          </p>
        </div>
      </section>

      {/* Section 4: Mission */}
      <section className="story-section">
        <div className="image-container">
          <img
            src={"./assets/images/mission_banner_image.png"}
            alt="Hand protecting wooden family figures with insurance icons"
          />
        </div>
        <div className="text-container blue-bg">
          <h2 className="title-yellow">Mission</h2>
          <div className="divider"></div>
          <p>
            To build an insurance experience where customers feel heard,
            supported, and protected - not just at the time of buying but in
            times when it matters most.
          </p>
          <p>
            We're not just here to create demand. We're here to build trust.
          </p>
          <p>
            That means bringing awareness and transparency about insurance and
            its role in both personal and business life across the country.
          </p>
        </div>
      </section>
    </div>
    </div>
  );
}
