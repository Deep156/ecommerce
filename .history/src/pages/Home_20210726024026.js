import React from "react";
import Cart from "../components/Cart";
import Cards from "../components/HomeCards";
import { useCart } from "../misc/CustomProvider";

const Home = () => {
  const cart = useCart();
  const Quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce(
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
