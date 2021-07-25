import React, { useState } from "react";
import Product from "../components/Product";
import CartProvider from "../misc/CustomProvider";
import Data from "../products.json";

const initialValue = Data.slice(0, 3);

const Keyboard = () => {
  const [data, setdata] = useState(initialValue);

  const getCheck = (value) => {
    setdata(
      value ? initialValue.filter((item) => item.delivery) : initialValue
    );
  };

  return (
    <CartProvider>
      <Product
        info={data}
        passCheck={(item) => getCheck(item)}
        heading={"Keyboards"}
      />
    </CartProvider>
  );
};

export default Keyboard;
