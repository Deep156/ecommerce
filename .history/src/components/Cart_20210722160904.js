import React from "react";
import { Button, Nav, Navbar } from "rsuite";

const Cart = () => {
  return (
    <Navbar>
      <Navbar.Body>
        <Nav pullRight>
          <Button
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: "#000",
              color: "white",
              fontSize: 20,
            }}
          >
            5
          </Button>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Cart;
