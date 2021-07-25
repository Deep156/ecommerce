import React from "react";
import items from "../products.json";
import Product from "./Product";
const Filter = () => {
  //const [filterText, setFilterText] = useState("");

  const filteredItems = items.filter((item) => item.delivery === true);

  //const itemsToDisplay = filterText ? filteredItems : items;
  console.log(filteredItems);
  return (
    <div>
      <Product info={filteredItems} />
    </div>
  );
};

export default Filter;
