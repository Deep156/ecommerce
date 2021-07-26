import React, { useCallback, useState } from "react";
import "../components/Cards.css";
import { useCart, useCartDispatch } from "../misc/CustomProvider";
import { Icon, IconButton } from "rsuite";
import Cart from "../components/Cart";
import Data from "../products.json";

const Checkout = () => {
  const getComputedCheckoutItems = (products, cartItems) => {
    const productsInCart = products.filter((p) =>
      cartItems.some((item) => item.id === p.id)
    );

    return productsInCart.map((product) => {
      return {
        ...product,
        quantity: cartItems.find((item) => item.id === product.id).quantity,
      };
    });
  };

  const cart = useCart();
  const dispatchCart = useCartDispatch();
  const [products] = useState(Data);
  const prev_items = getComputedCheckoutItems(products, cart);

  const handleAdd = useCallback(
    (id) => {
      dispatchCart({ type: "ADD_ONE", id });
    },
    [dispatchCart]
  );

  const handleRemoveOne = useCallback(
    (id) => {
      dispatchCart({ type: "REMOVE_ONE", id });
    },
    [dispatchCart]
  );

  const handleRemove = useCallback(
    (id) => {
      dispatchCart({ type: "REMOVE", id });
    },
    [dispatchCart]
  );

  const Quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  return (
    <div>
      <Cart cartTotal={cartTotal} Quantity={Quantity} />

      <div className="column">
        <div>
          <text style={{ fontSize: 40 }}>Checkout</text>
        </div>
        <div className="cards" style={{ height: 300, width: "100%" }}>
          <div style={{ padding: 20 }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                //alignContent: "space-between",
              }}
            >
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
                <th>RemoveOne</th>
                <th>Additem</th>
              </tr>
              {prev_items.map((item) => (
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
                      style={{
                        height: "40px",
                        width: "40px",
                        marginLeft: "100",
                      }}
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
                    {item.price * item.quantity}
                  </td>
                  <td
                    style={{
                      borderTopWidth: 2,
                      borderTopStyle: "solid",
                      borderTopColor: "black",
                      borderCollapse: "collapse",
                    }}
                  >
                    {item.quantity}
                  </td>
                  <td
                    style={{
                      borderTopWidth: 2,
                      borderTopStyle: "solid",
                      borderTopColor: "black",
                      borderCollapse: "collapse",
                    }}
                  >
                    {" "}
                    <IconButton
                      onClick={() => {
                        handleRemove(item.id);
                      }}
                      icon={<Icon icon="trash" />}
                    />{" "}
                  </td>
                  <td
                    style={{
                      borderTopWidth: 2,
                      borderTopStyle: "solid",
                      borderTopColor: "black",
                      borderCollapse: "collapse",
                    }}
                  >
                    {" "}
                    <IconButton
                      onClick={() => {
                        handleRemoveOne(item.id);
                      }}
                      icon={<Icon icon="minus" />}
                    />{" "}
                  </td>
                  <td
                    style={{
                      borderTopWidth: 2,
                      borderTopStyle: "solid",
                      borderTopColor: "black",
                      borderCollapse: "collapse",
                    }}
                  >
                    {" "}
                    <IconButton
                      onClick={() => {
                        handleAdd(item.id);
                      }}
                      icon={<Icon icon="plus" />}
                    />{" "}
                  </td>
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
