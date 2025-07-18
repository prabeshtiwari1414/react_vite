import React from "react";
import NavBar from "../NavBar/NavBar";
import HeroSection from "./Component/HeroSection";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="flex-1">
      <NavBar />
      <div className=" ">
        <HeroSection />
        <hr />
        <Product />
      </div>
    </div>
  );
};

export default Home;
