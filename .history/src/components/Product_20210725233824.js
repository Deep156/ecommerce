import React, { useContext, useEffect, useState } from "react";
import "../components/Cards.css";
import Sidenavbar from "./Sidenavbar";
import styled from "styled-components";
import Cart from "./Cart";
//import { CartContext, AddCartContext } from "../misc/CustomProvider";
import { useShoppingCart } from "../misc/CustomProvider";

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
  /*const items = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState(0);
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);
  const [Quantity, setQuantity] = useState(0);

  const total = () => {
    setCartTotal(items.reduce((acc, item) => acc + item.price, 0));
  };

  const totalQuantity = () => {
    setQuantity(items.reduce((acc, item) => acc + item.quantity, 0));
  };

  const addItems = useContext(AddCartContext);

  const handleClick = (item) => {
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
      totalQuantity();
    }
  }, [items]);*/
  const { cartState, dispatch } = useShoppingCart();

  // function to add Product to Cart. Sent as a Prop to the AddToCart Component.
  const addProduct = (p_id, p_price) => {
    dispatch({
      type: "ADD_PRODUCT",
      productInfo: { id: p_id, price: p_price },
    });

    //Alert.info('Product added to cart', 4000);
  };

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
                  //onClick={() => handleClick(card)}
                  onClick={addProduct(card.id, card.price)}
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
