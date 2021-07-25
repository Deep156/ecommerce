import React from "react";
import Product from "../components/Product";
import Data from "../products.json";
import Sidenavbar from "../components/Sidenavbar";

const data = Data.slice(0, 3);
const Keyboard = () => {
  return (
    <div>
      <Product info={data} />
    </div>
  );
};

export default Keyboard;
