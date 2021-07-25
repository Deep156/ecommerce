import React, { useState } from "react";
import { Nav, Sidenav, Checkbox } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
//import Filter from "./Filter";

const Sidenavbar = () => {
  const [check, setCheck] = useState(false);
  //const [show, setShow] = useState(false);
  const onClickCheckbox = () => {
    setCheck(!check);
  };
  return (
    <div style={{ width: "23.33%" }}>
      <hr />
      <Sidenav>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1">
              <Checkbox checked={check} onCheckboxClick={onClickCheckbox}>
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
