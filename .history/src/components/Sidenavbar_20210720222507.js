import React, { useState } from "react";
import { Nav, Sidenav, Checkbox } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import items from "../products.json";
import Product from "./Product";

//import Filter from "./Filter";

const Sidenavbar = () => {
  const [check, setCheck] = useState(false);
  const onClickCheckbox = () => {
    setCheck(!check);\
    if(!check)
    {
      alert("Hii")
    }
  };
  const filteredItems = items.filter((item) => item.delivery);

  return (
    <div style={{ width: "23.33%" }}>
      <hr />
      <Sidenav>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1">
              <Checkbox checked={check} onCheckboxClick={ () => {
    setCheck(!check); if (!check){<Product info={filteredItems} />}} >
                Price
              </Checkbox>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidenavbar;
