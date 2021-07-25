import React from "react";
import { Nav, Sidenav, Checkbox } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

const Sidenavbar = () => {
  return (
    <div style={{ width: "23.33%" }}>
      <hr />
      <Sidenav>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1">
              <Checkbox checked={true}>Price</Checkbox>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidenavbar;
