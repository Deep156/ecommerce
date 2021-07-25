import React, { useState } from "react";
import Product from "../components/Product";
import Data from "../products.json";
import { CartProvider } from "../misc/CustomProvider";

const initialValue = Data.slice(3, 6);
const Headphone = () => {
  const [data, setdata] = useState(initialValue);

  const getCheck = (value) => {
    setdata(value ? initialValue.filter((item) => item.inStock) : initialValue);
  };

  return (
    <CartProvider>
      <Product
        info={data}
        passCheck={(item) => getCheck(item)}
        heading="Headphones"
      />
    </CartProvider>
  );
};

export default Headphone;
