import React from "react";
import { Button, Nav, Navbar, Affix } from "rsuite";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const history = useHistory();
  let prev_items = JSON.parse(localStorage.getItem("cart")) || [];

  const Quantity = prev_items.length;
  const cartTotal = prev_items.reduce((acc, item) => acc + item.price, 0);

  return (
    <Affix>
      <Navbar>
        <Navbar.Body>
          <Nav pullRight>
            <Button
              onClick={() => history.push("/checkout")}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: "#000",
                color: "white",
                fontSize: 20,
              }}
            >
              {Quantity}
            </Button>
            <Button
              onClick={() => history.push("/checkout")}
              style={{
                backgroundColor: "#000",
                color: "white",
                fontSize: 20,
                marginRight: 20,
              }}
            >
              ${cartTotal}
            </Button>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </Affix>
  );
};

export default Cart;
