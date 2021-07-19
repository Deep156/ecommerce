import React from "react";
import Product from "../components/Product";
import Data from "../products.json";

const data = Data.slice(0, 3);
const Category = () => {
  return (
    <div>
      <Product data={data} />
    </div>
  );
};

export default Category;
