import React from "react";
import Product from "../components/Product";
import Data from "../products.json";
//import Sidenavbar from "../components/Sidenavbar";

const data = Data.slice(0, 3);

const Keyboard = () => {
  const getCheck = (value) => {
    console.log(value);
  };
  return (
    <div>
      <Product info={data} passCheck={getCheck} />
    </div>
  );
};

export default Keyboard;
