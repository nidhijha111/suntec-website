import React from "react";

export default function MajorBenefits() {
  const benefitsData = [
    {
      number: "1",
      title: "Protection",
      description:
        "Insurance coverage encompasses third-party liability, while comprehensive policies protect against expenses related to damage to your vehicles in addition to third-party liability.",
      variant: "yellow",
    },
    {
      number: "2",
      title: "Simplified claim process",
      description:
        "A smooth process enables policyholders to submit claims and receive prompt fund disbursement.",
      variant: "blue",
    },
    {
      number: "3",
      title: "Add-ons",
      description:
        "Enhance your coverage by choosing from various supplementary options.",
      variant: "yellow",
    },
    {
      number: "4",
      title: "Cashless service",
      description:
        "Taking advantage of network garages provides the extra benefit of cashless claim experience.",
      variant: "blue",
    },
  ];

  return (
    <>
      <section className="major-benefits-section">
        <div className="section-title main_heading_text">
          <div className="blue">Major benefit of goods-carrying</div>
          <div className="yellow"> vehicle Insurance?</div>
        </div>
        <div className="benefits-grid">
          {benefitsData.map((benefit) => (
            <div key={benefit.number} className={`benefit-card`}>
              <div
                className={`benefit-card-number-wrapper card-variant-${benefit.variant}`}
              >
                <div className="benefit-card-number">{benefit.number}</div>
              </div>
              <div className={`benefit-card-content card-variant-${benefit.variant}`}>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="disclaimer-text-group">
        <p className="disclaimer-note">
          Disclaimer : The information provided on our website is intended to
          offer a overview of insurance products and services. For complete and
          detailed information please refer to the respective insurer's official
          website and product documents.
        </p>
        <p className="disclaimer-note">
          Disclaimer : Suntec Insurance Broking Private Limited acts solely as a
          facilitator. The final decision on claim settlement rests entirely
          with the respective insurer. For complete details on risk factors,
          terms and conditions, please refer to the insurer's sales brochure
          before making a purchase. Standard terms and conditions apply.
        </p>
      </section>
    </>
  );
}
