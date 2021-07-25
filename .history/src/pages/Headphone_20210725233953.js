import React, { useState } from "react";
import Product from "../components/Product";
import Data from "../products.json";
import CustomProvider from "../misc/CustomProvider";

const initialValue = Data.slice(3, 6);
const Headphone = () => {
  const [data, setdata] = useState(initialValue);

  const getCheck = (value) => {
    setdata(
      value ? initialValue.filter((item) => item.delivery) : initialValue
    );
  };

  return (
    <CustomProvider>
      <Product
        info={data}
        passCheck={(item) => getCheck(item)}
        heading="Headphones"
      />
    </CustomProvider>
  );
};

export default Headphone;
