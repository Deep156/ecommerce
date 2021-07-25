import React, { useContext, useEffect, useState } from "react";
import "../components/Cards.css";
import Sidenavbar from "./Sidenavbar";
import styled from "styled-components";
import Cart from "./Cart";
import { CartContext, AddCartContext } from "../misc/CustomProvider";

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

const initialState = {
  id: "",
  name: "",
};
//const cart = useCount;
const Product = (props) => {
  /*const addItems = useContext(AddCartContext);
  const items = useContext(CartContext);

  const handleClick = (item = initialState) => {
    addItems(item);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);
*/

  const items = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState(0);
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);

  const total = () => {
    setCartTotal(items.reduce((acc, item) => acc + item.price, 0));
  };

  const addItems = useContext(AddCartContext);

  const handleClick = (item = initialState) => {
    addItems(item);
  };
  useEffect(() => {
    let prev_items = JSON.parse(localStorage.getItem("cart")) || [];
    addItems(prev_items);
    setIsInitiallyFetched(true);
  }, []);

  useEffect(() => {
    if (isInitiallyFetched) {
      localStorage.setItem("cart", JSON.stringify(items));
      total();
    }
  }, [items]);

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
                <Button
                  disabled={!card.inStock}
                  onClick={() => handleClick(card)}
                >
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
