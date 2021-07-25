import React, { useState, useContext } from "react";
import Cart from "../components/Cart";
import Cards from "../components/HomeCards";
import CustomProvider from "../misc/CustomProvider";

const Home = () => {
  let prev_items = JSON.parse(localStorage.getItem("cart")) || [];

  const Quantity = prev_items.length;
  const cartTotal = prev_items.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
      <Cart cartTotal={cartTotal} Quantity={Quantity} />

      <Cards />
    </div>
  );
};

export default Home;
