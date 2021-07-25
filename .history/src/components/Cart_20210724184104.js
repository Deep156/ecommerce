import React, { useState, useContext, useEffect } from "react";
import { Button, Nav, Navbar } from "rsuite";
import {
  CartContext,
  RemoveCartContext,
  AddCartContext,
} from "../misc/CustomProvider";

const Cart = () => {
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
            $0
          </Button>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Cart;
