import React, { useState } from "react";
import Product from "../components/Product";
import Data from "../products.json";
//import Sidenavbar from "../components/Sidenavbar";

const initialValue = Data.slice(0, 3);

const Keyboard = () => {
  const [data, setdata] = useState(initialValue);

  const getCheck = (value) => {
    if (value) {
      setdata(Data.filter((item) => item.delivery));
    } else {
      setdata(initialValue);
    }
  };

  return (
    <div>
      <Product info={data} passCheck={getCheck} />
    </div>
  );
};

export default Keyboard;
