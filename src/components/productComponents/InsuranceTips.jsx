import React from "react";

export default function InsuranceTips() {
  const factorsData = [
    {
      id: "idv",
      title: <>Choose the <br/> right IDV</>,
      variant: "blue", // 'blue' or 'yellow' for the header
      description:
        "IDV represents the manufacturer's selling price of the commercial vehicle (including depreciation) you wish to insure. Choose an IDV that closely aligns with your vehicle's market value. A reduced IDV could lower your premium but may lead to higher expenses when filing a claim.",
    },
    {
      id: "support",
      title: <>Customer <br/> support</>,
      variant: "yellow",
      description:
        "Select an Insurance provider offering a simple and efficient claims process, 24/7 customer support, and quick claim resolutions.",
    },
    {
      id: "addons",
      title: <>Review <br/> add-ons</>,
      variant: "blue",
      description:
        "When selecting the ideal commercial Insurance for your vehicle, consider the available add-ons to ensure you receive maximum benefits.",
    },
    {
      id: "csr",
      title: <>Assess the <br/> Insurer's CSR</>,
      variant: "yellow",
      description:
        "Before making a purchase, review the insurer's CSR. A higher CSR indicates the company's ability to settle claims promptly, so opt for an insurer with a strong CSR.",
    },
  ];
  return (
    <section className="choose-insurance-section">
      
        <div className="section-title main_heading_text">
          <div className="yellow">How to choose the right</div>
          <div className="blue"> goods-carrying vehicle Insurance?</div>
        </div>
        <div className="heading-line"></div>
        <p className="section-subtitle">
          With the number of options available, it is important to choose an
          Insurance that covers most of the benefits. When choosing the right
          car Insurance policy, there are several factors to consider. Here are
          some key points:
        </p>
        <div className="factors-grid">
          {factorsData.map((factor) => (
            <div key={factor.id} className="factor-card">
              <div
                className={`factor-card-header card-header-${factor.variant}`}
              >
                <div className="fector_title">{factor.title}</div>
              </div>
              <div className={`factor-card-body card-body-${factor.variant}`}>
                <p>{factor.description}</p>
              </div>
            </div>
          ))}
        </div>
     
    </section>
  );
}
