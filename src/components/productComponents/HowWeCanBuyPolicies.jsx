import React from "react";

export default function HowWeCanBuyPolicies() {
  const stepsData = [
    {
      id: "step1",
      stepNumber: "Step 1",
      variant: "blue",
      description:
        "Visit suntec's website www.suntecinsurance.com Click on the 'Commercial Vehicle' icon on the Home Page or from the 'Products' tab.",
    },
    {
      id: "step2",
      stepNumber: "Step 2",
      variant: "yellow",
      description: "Enter your registration number, mobile number and email.",
    },
    {
      id: "step3",
      stepNumber: "Step 3",
      variant: "blue",
      description:
        "Our Insurance advisor will provide all the necessary information to help you choose the policy that best suits your needs.",
    },
    {
      id: "step4",
      stepNumber: "Step 4",
      variant: "yellow",
      description: "After choosing the policy, make the premium payment.",
    },
    {
      id: "step5",
      stepNumber: "Step 5",
      variant: "blue",
      description:
        "Your goods-carrying vehicle Insurance policy will be mailed to you after paying the premium.",
    },
  ];

  return (
    <section className="how-to-buy-section-corrected">
      <div className="main_heading_text text-center">
        <div className="blue"> How to buy goods-carrying </div>
        <div className="yellow"> vehicle Insurance policy?</div>
      </div>
      <div className="heading-line"></div>
      <div className="large_devide_image">
        <img src="./assets/images/steps_image.svg" alt="pilicy buy steps" />
      </div>
      <div className="steps-flow-container small_device_section">
        {stepsData.map((step) => (
          <div
            key={step.id}
            className={`flow-step-card flow-step-card-${step.variant}`}
          >
            <div className="flow-step-card-header">
              <h4>{step.stepNumber}</h4>
            </div>
            <div className="flow-step-card-body">
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
