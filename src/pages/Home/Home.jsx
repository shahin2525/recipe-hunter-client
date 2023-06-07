import React from "react";
import Banner from "../components/Banner";
import ChefSection from "../components/ChefSection";
import BranchSection from "../components/BranchSection";
import SpecialFood from "../components/SpecialFood";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefSection></ChefSection>
      <BranchSection></BranchSection>
      <SpecialFood></SpecialFood>
    </div>
  );
};

export default Home;
