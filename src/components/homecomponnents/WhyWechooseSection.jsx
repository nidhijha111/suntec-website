import React from "react";

export default function WhyWechooseSection() {
  return (
    <section className="why-suntec-section">
      <div className="why-suntec-container">
        <div className="why-suntec-left">
          <div className="main_heading_text">
            <div className="white">Why Suntec Insurance</div>
            <div className="white">Broking Private Ltd.?</div>
          </div>
          <p>
            At Suntec Insurance, we believe service isn’t just a feature.
            Especially in commercial Insurance, where processes are complex,
            businesses need more than a policy - they need someone who stands by
            them when it matters.
          </p>
          <p>
            We simplify the insurance process, helping you make sense of it,
            manage it, and, most importantly, claim it without chaos. Insurance
            isn’t just about the sale but about processing claims when needed.
          </p>
        </div>

        <div className="why-suntec-right">
          <div className="feature-card">
            <img
              src="./assets/images/faster_claim_icon.svg"
              alt="life insurence icon"
            />
            <div className="card-title">
              Faster claims,
              <br />
              zero stress
            </div>
            <p>
              Our claim support team facilitates putting all the documentation
              in place, prioritising speedy resolutions and bringing clarity to
              the claims process.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="./assets/images/people_over_policies_icon.svg"
              alt="life insurence icon"
            />
            <div className="card-title">
              People over
              <br />
              policies
            </div>
            <p>
              We stay with you beyond the sale - helping you in facilitating
              claims, simplifying coverage, and providing a personal touch at
              every step of the way.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="./assets/images/documentation_support_iocn.svg"
              alt="life insurence icon"
            />
            <div className="card-title">
              Smart, seamless
              <br />
              documentation support
            </div>
            <p>
              Our claims support team ensures that all your documents are
              organised and protected within a secure, easily accessible
              platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
