import React, { useState, useContext } from "react";
import Cart from "../components/Cart";
import Cards from "../components/HomeCards";
import { CartContext } from "../misc/CustomProvider";

const Home = () => {
  const items = useContext(CartContext);
  //const [cartTotal, setCartTotal] = useState(0);
  //const [Quantity, setQuantity] = useState(0);

  const CartTotal = items.reduce((acc, item) => acc + item.price, 0);

  //const totalQuantity = () => {
  const Quantity = items.length;

  return (
    <div>
      <Cart cartTotal={CartTotal} Quantity={Quantity} />
      <Cards />
    </div>
  );
};

export default Home;
