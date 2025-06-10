import React from "react";

// You can place this data array within the component or import it
const coveragesData = [
  {
    id: "third-party",
    title: "Third-party\ncoverage", // Using \n for potential line break hint
    variant: "blue",
    paragraphs: [
      "Section 146 of the Motor Vehicles Act of 1988, requires third-party coverage for all commercial vehicles.",
      "This plan provides basic coverage for any loss or damage caused to a third-party individual or property, covering legal liabilities but no protection for your vehicle.",
    ],
  },
  {
    id: "own-damage",
    title: "Own damage\ncoverage",
    variant: "yellow",
    paragraphs: [
      "Own Damage (OD) covers damages from natural calamities, accidents, theft, fire, and man-made disasters.",
    ],
  },
  {
    id: "comprehensive",
    title: "Comprehensive\ncoverage",
    variant: "blue",
    paragraphs: [
      "Comprehensive commercial vehicle Insurance offer complete protection for your vehicle.",
      "It covers all risks, such as accidents, theft, fire, natural calamities, personal accidents, and protection from third-party liabilities. You can customise the plan further with add-ons for a more personalised experience.",
    ],
  },
];

const CoverageTypesSection = () => {
  return (
    <section className="coverage-types-section">
      <div className="section-title">
      <div className="main_heading_text">
        <div className="blue">Types of goods-carrying vehicle</div>
        <div className="yellow"> Insurance coverages</div>
      </div>
       </div>
      <div className="coverage-cards-container">
        {coveragesData.map((coverage) => (
          <div
            key={coverage.id}
            className={`coverage-card card-variant-${coverage.variant}`}
          >
            <div className="card-top">
              <div className="card-top-heading">
                {coverage.title.split("\n").map((line, index, arr) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="card-content">
              {coverage.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="disclaimer-note">
        Please note : For the detailed information on these three types of
        coverages, please read the policy document available on the respective
        insurers website.
      </p>
    </section>
  );
};

export default CoverageTypesSection;
