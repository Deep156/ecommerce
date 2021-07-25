import React, { useState } from "react";
import Product from "../components/Product";
import Data from "../products.json";
//import Sidenavbar from "../components/Sidenavbar";

const initialValue = Data.slice(0, 3);

const Keyboard = () => {
  const [data, setdata] = useState(initialValue);

  const getCheck = (value) => {
    /*if (value) {
      setdata(initialValue.filter((item) => item.delivery));
    } else {
      setdata(initialValue);
    }*/
    setdata(
      !value ? initialValue.filter((item) => item.delivery) : initialValue
    );
  };

  return (
    <div>
      <Product
        info={data}
        passCheck={(item) => getCheck(item)}
        heading={"Keyboards"}
      />
    </div>
  );
};

export default Keyboard;
