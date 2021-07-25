import React, { useEffect, useState } from "react";
import "../components/Cards.css";
import Sidenavbar from "./Sidenavbar";
import styled from "styled-components";
import Cart from "./Cart";
//import addItem from "../misc/CustomProvider";

const Button = styled.button`
  background-color: black;
  color: white;
  width: 100%;
  padding: 10px 60px;
  border-radius: 15px;

  &:disabled {
    color: grey;
    opacity: 0.7;
  }
`;

const Product = (props) => {
  let [cart, setCart] = useState([]);
  const addItem = (item) => {
    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy = [...cart];

    //assuming we have an ID field in our item
    let { ID } = item;

    //look for item in cart array
    let existingItem = cartCopy.find((cartItem) => cartItem.ID === ID);

    //if item already exists
    if (existingItem) {
      existingItem.quantity += item.quantity; //update item
    } else {
      //if item doesn't exist, simply add it
      cartCopy.push(item);
    }

    //update app state
    setCart(cartCopy);

    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  //this is called on component mount
  useEffect(() => {
    //turn it into js
    const localCart = JSON.parse(localStorage.getItem("cart"));
    //load persisted cart into state if it exists
    if (localCart) setCart(localCart);
  }, []); //the empty array ensures useEffect only runs once

  return (
    <div>
      <Cart />
      <div className="row">
        <Sidenavbar passCheck={(item) => props.passCheck(item)} />
        {props.info.length > 0 ? (
          props.info.map((card) => (
            <div className="card">
              <img
                src={card.thumbnail}
                alt="Avatar"
                style={{ width: "100%", height: "15vw", objectFit: "cover" }}
              />
              <div className="card-body">
                <h4>
                  <b>{card.name}</b>
                </h4>
                <p>
                  <b>${card.price}</b>
                </p>
                <p style={{ textAlign: "center" }}>
                  {card.inStock ? (
                    <b style={{ color: "green" }}> STOCK</b>
                  ) : (
                    <b style={{ color: "red" }}>OUT OF STOCK</b>
                  )}
                </p>
                <hr />
                <Button disabled={!card.inStock} onClick={addItem(card.id)}>
                  Add to cart
                </Button>
              </div>
            </div>
          ))
        ) : (
          <h1>No item is deliverable</h1>
        )}
      </div>
    </div>
  );
};

export default Product;
