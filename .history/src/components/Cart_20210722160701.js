import React from "react";
import { Button, Nav, Navbar } from "rsuite";

const Cart = () => {
  return (
    <Navbar>
      <Navbar.Body>
        <Nav pullRight>
          <Button>5 $150</Button>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Cart;
