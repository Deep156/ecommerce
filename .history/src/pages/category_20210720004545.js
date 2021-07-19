import React from "react";
import Product from "../components/Product";
import Data from "../products.json";

const data = Data.slice(3, 6);
const Category = () => {
  return (
    <div>
      <Product info={data} />
    </div>
  );
};

export default Category;
