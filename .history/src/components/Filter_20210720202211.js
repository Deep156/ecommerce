import React from "react";
import items from "../products.json";
import Product from "./Product";
const Filter = () => {
  //const [filterText, setFilterText] = useState("");

  const filteredItems = items.filter((item) => item.inStock === "true");

  //const itemsToDisplay = filterText ? filteredItems : items;

  return (
    <div>
      {console.log({ filteredItems })}
      <Product info={filteredItems} />
    </div>
  );
};

export default Filter;
