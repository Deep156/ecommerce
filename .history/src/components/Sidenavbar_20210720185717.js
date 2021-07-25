import React from "react";
import { Nav, Sidenav, Checkbox } from "rsuite";
import "./Cards.css";
import "rsuite/dist/styles/rsuite-default.css";

const Sidenavbar = () => {
  return (
    <div style={{ width: "23.33%" }} className="filter">
      <hr />
      <Sidenav>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1">
              <Checkbox>Price</Checkbox>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidenavbar;
