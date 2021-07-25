import React, { useState } from "react";
import Product from "../components/Product";
import Data from "../products.json";

const initialValue = Data.slice(3, 6);
const Headphone = () => {
  const [data, setdata] = useState(initialValue);

  const getCheck = (value) => {
    /* if (value) {
      setdata(initialValue.filter((item) => item.delivery));
    } else {
      setdata(initialValue);
    }*/
    setdata(
      !value ? initialValue.filter((item) => item.delivery) : initialValue
    );
  };

  return (
    <div>
      <Product
        info={data}
        passCheck={(item) => getCheck(item)}
        heading="Headphones"
      />
    </div>
  );
};

export default Headphone;
