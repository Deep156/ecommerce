import React from "react";
import { Button, Nav, Navbar } from "rsuite";

const Cart = (props) => {
  return (
    <Navbar>
      <Navbar.Body>
        <Nav pullRight>
          <Button
            onClick={console.log("Cart")}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: "#000",
              color: "white",
              fontSize: 20,
            }}
          >
            0
          </Button>
          <Button
            style={{
              backgroundColor: "#000",
              color: "white",
              fontSize: 20,
              marginRight: 20,
            }}
          >
            ${props.cartTotal}
          </Button>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Cart;
