import React, { useState, useContext } from "react";
import Cart from "../components/Cart";
import Cards from "../components/HomeCards";
import CustomProvider from "../misc/CustomProvider";

const Home = () => {
  return (
    <div>
      <CustomProvider>
        <Cart />
      </CustomProvider>
      <Cards />
    </div>
  );
};

export default Home;
