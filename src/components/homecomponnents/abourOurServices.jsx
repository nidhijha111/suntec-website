import React from "react";

export default function AbourOurServices() {
  return (
    <section className="about_our_services_section">
      <div className="about_work_info_text">
        <div className="main_heading_text yellow">
          Fast, reliable, transparent Insurance{" "}
        </div>
        <div className="main_heading_text blue">
          solutions for transport and beyond.
        </div>
        <div className="line_wrapper"></div>
        <div className="text_wrapper">
          At Suntec Insurance, we understand the unique challenges of commercial
          vehicle Insurance in the transport and logistics sector. Suntec
          Insurance simplifies the journey with hands-on support, smart document
          management, and simplified processes, ensuring you’re never left in
          the dark.
        </div>
        <div className="text_wrapper">
          We don’t just sell policies; we stay with you to facilitate, simplify,
          and speed up your claim process so you can focus on the road ahead.
        </div>
        <div className="text_wrapper">
          With Suntec Insurance, commercial vehicle Insurance becomes less of a
          task and more of a trusted service.
        </div>
      </div>
      <div>
        <img
          src="./assets/images/about_services_image.svg"
          alt="service images"
        />
      </div>
    </section>
  );
}
