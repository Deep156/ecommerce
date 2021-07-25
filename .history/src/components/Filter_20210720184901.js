import React from "react";
import { Nav, Sidenav, Toggle, Checkbox } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

/*class Filter extends React.Component {
 

    return (
      <div style={{ width: 250 }}>
        <Toggle onChange={this.handleToggle} checked={expanded} />
        <hr />
        <Sidenav
          expanded={expanded}
          defaultOpenKeys={["3", "4"]}>
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
  }*/
const Filter = () => {
  return (
    <div style={{ width: 250 }}>
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

export default Filter;
