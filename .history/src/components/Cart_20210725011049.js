import React from "react";
import { Button, Nav, Navbar, Affix } from "rsuite";
import { useHistory } from "react-router-dom";

const Cart = (props) => {
  const history = useHistory();

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
              {props.Quantity}
            </Button>
            <Button
              onClick={() => history.push("/checkout")}
              style={{
                backgroundColor: "#000",
                color: "white",
                fontSize: 20,
                marginRight: 20,
              }}
              onClick={() => console.log("cart")}
            >
              ${props.cartTotal}
            </Button>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </Affix>
  );
};

export default Cart;
