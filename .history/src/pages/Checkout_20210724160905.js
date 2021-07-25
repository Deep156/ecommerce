import React, { useContext, useEffect, useState } from "react";
import "../components/Cards.css";
import {
  CartContext,
  RemoveCartContext,
  AddCartContext,
} from "../misc/CustomProvider";

const Checkout = () => {
  const items = useContext(CartContext);
  const removeItem = useContext(RemoveCartContext);
  const [cartTotal, setCartTotal] = useState(0);
  //const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);

  const total = () => {
    setCartTotal(items.reduce((acc, item) => acc + item.price, 0));
  };

  //const addItems = useContext(AddCartContext);
  useEffect(() => {
    let prev_items = JSON.parse(localStorage.getItem("cart")) || [];
  });

  return (
    <div className="column">
      <div style={{ alignContent: "flex-start" }}>
        <div>
          <text style={{ fontSize: 40, marginBottom: 40 }}>Checkout</text>
        </div>
        <div className="cards" style={{ height: 300, width: 1000 }}>
          <div style={{ padding: 40 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tr>
                <th>pic</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>remove</th>
              </tr>
              {items.map((item) => (
                <tr style={{ borderCollapse: "collapse" }}>
                  <td
                    style={{
                      borderTopWidth: 2,
                      borderTopStyle: "solid",
                      borderTopColor: "black",
                      borderCollapse: "collapse",
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt="Smiley face"
                      style={{ height: "20px", width: "20px" }}
                    />
                  </td>

                  <td
                    style={{
                      borderTopWidth: 2,
                      borderTopStyle: "solid",
                      borderTopColor: "black",
                      borderCollapse: "collapse",
                    }}
                  >
                    {item.name}
                  </td>
                  <td
                    style={{
                      borderTopWidth: 2,
                      borderTopStyle: "solid",
                      borderTopColor: "black",
                      borderCollapse: "collapse",
                    }}
                  >
                    {item.price}
                  </td>
                  <td
                    style={{
                      borderTopWidth: 2,
                      borderTopStyle: "solid",
                      borderTopColor: "black",
                      borderCollapse: "collapse",
                    }}
                  />
                  <td
                    style={{
                      borderTopWidth: 2,
                      borderTopStyle: "solid",
                      borderTopColor: "black",
                      borderCollapse: "collapse",
                    }}
                  />
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
