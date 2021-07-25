import React from "react";

import Product from "../components/Product";
import Data from "../products.json";

const data = Data.slice(0, 3);
const Keyboard = () => {
  return (
    <div>
      <Product info={data} />
    </div>
  );
};

export default Keyboard;
