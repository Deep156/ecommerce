import React from "react";
import items from "../products.json";
import Product from "./Product";
const Filter = () => {
  //const [filterText, setFilterText] = useState("");

  const filteredItems = items.filter((item) => item.inStock.includes("true"));

  //const itemsToDisplay = filterText ? filteredItems : items;

  return (
    <div>
      <hr />
      {!filteredItems.length && (
        <div>There are no items to display adjust your filter criteria</div>
      )}
      <Product info={filteredItems} />
    </div>
  );
};

export default Filter;
