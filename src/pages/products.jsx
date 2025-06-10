import React from "react";
import "../styles/producs.scss";
import ProductHeroSection from "../components/productComponents/productHeroSection";
import CoverageSection from "../components/productComponents/CoverageSection";
import MajorBenefits from "../components/productComponents/majorBenefits";
import InsuranceTips from "../components/productComponents/InsuranceTips";
import HowWeCanBuyPolicies from "../components/productComponents/HowWeCanBuyPolicies";
import DocumentsNeededSection from "../components/productComponents/DocumentsNeededSection";

export default function Products() {
  return (
    <div className="container">
      <ProductHeroSection />
      <CoverageSection/>
      <MajorBenefits/>
      <InsuranceTips/>
      <HowWeCanBuyPolicies/>
      <DocumentsNeededSection/>
    </div>
  );
}
