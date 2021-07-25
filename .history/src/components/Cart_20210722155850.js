import React from "react";
import { Nav, Navbar } from "rsuite";

const Cart = () => {
  return (
    <Navbar>
      <Navbar.Body>
        <Nav pullRight>
          <Nav.Item style={{ height: 40, width: 40, borderRadius: 20 }}>
            5{" "}
          </Nav.Item>
          <Nav.Item> $150</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Cart;
