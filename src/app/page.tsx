import React from "react";
import Hero from "./components/Hero";
import ShoeList from "./components/ShoeList";
import Featured from "./components/Featured";
import HeroTop from "./components/HeroTop";
import GearUp from "./components/GearUp";
import DontMiss from "./components/DontMiss";
import Essentials from "./components/Essentials";
import Categories from "./components/Categories";

const Home: React.FC = () => {
  return (
    <div>
      <HeroTop />
      <Hero />
      <ShoeList />
      <Featured />
      <GearUp />
      <DontMiss />
      <Essentials />
      <Categories />
    </div>
  );
};

export default Home;
