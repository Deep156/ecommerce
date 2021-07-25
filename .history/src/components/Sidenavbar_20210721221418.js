import React, { useState } from "react";
import { Nav, Sidenav, Checkbox } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

//import Filter from "./Filter";

const Sidenavbar = (props) => {
  const [check, setCheck] = useState(false);
  const onClickCheckbox = () => {
    setCheck(!check);
    props.passCheck(!check);
  };

  return (
    <div style={{ width: "23.33%" }}>
      <hr />
      <Sidenav>
        <Sidenav.Body>
          <Nav>
            <h1>FILTER</h1>
            <Nav.Item eventKey="1">
              <Checkbox checked={check} onCheckboxClick={onClickCheckbox}>
                Delivery
              </Checkbox>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidenavbar;
