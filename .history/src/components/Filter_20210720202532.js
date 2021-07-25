import React from "react";
import items from "../products.json";
import Product from "./Product";
const Filter = () => {
  //const [filterText, setFilterText] = useState("");

  const filteredItems = items.filter((item) => console.log(item));

  //const itemsToDisplay = filterText ? filteredItems : items;

  return (
    <div>
      <Product info={filteredItems} />
    </div>
  );
};

export default Filter;
