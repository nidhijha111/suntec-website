import React from "react";
import "../styles/home.scss";
import OurPatners from "../components/homecomponnents/ourPatners";
import HowdoweWork from "../components/homecomponnents/howdoweWork";
import AbourOurServices from "../components/homecomponnents/abourOurServices";
import HeroSection from "../components/homecomponnents/heroSection";
import CategoriesListing from "../components/homecomponnents/categoriesListing";
import HomePageBanner from "../components/homecomponnents/HomePageBanner";
import WhyWechooseSection from "../components/homecomponnents/WhyWechooseSection";
import BottomTopScrollSection from "../components/bottomTopScrollSection";

export default function Home() {
  return (
    <main className="container">
      <HeroSection />
      <CategoriesListing />
      <WhyWechooseSection />
      <HomePageBanner />
      <AbourOurServices />
      <HowdoweWork />
      <OurPatners />
      <BottomTopScrollSection/>
    </main>
  );
}
