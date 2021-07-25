import React from "react";
import Cart from "../components/Cart";
import Cards from "../components/HomeCards";

const Home = () => {
  let prev_items = JSON.parse(localStorage.getItem("cart")) || [];

  const Quantity = prev_items.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = prev_items.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );
  return (
    <div>
      <Cart cartTotal={cartTotal} Quantity={Quantity} />

      <Cards />
    </div>
  );
};

export default Home;
