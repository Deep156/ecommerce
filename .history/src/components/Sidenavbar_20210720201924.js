import React, { useState } from "react";
import { Nav, Sidenav, Checkbox } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
//import Filter from "./Filter";

const Sidenavbar = () => {
  const [check, setCheck] = useState("false");
  const onClickCheckbox = () => {
    if (check === "true") {
      console.log("hii");
    }
    setCheck(!check);
  };
  return (
    <div style={{ width: "23.33%" }}>
      <hr />
      <Sidenav>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1">
              <Checkbox onCheckboxClick={onClickCheckbox}>Price</Checkbox>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidenavbar;
