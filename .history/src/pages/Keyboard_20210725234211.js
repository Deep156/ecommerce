import React, { useState } from "react";
import Product from "../components/Product";
import { CustomProvider } from "../misc/CustomProvider";
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
    <CustomProvider>
      <Product
        info={data}
        passCheck={(item) => getCheck(item)}
        heading={"Keyboards"}
      />
    </CustomProvider>
  );
};

export default Keyboard;
