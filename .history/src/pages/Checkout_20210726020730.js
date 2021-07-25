import React, { useCallback, useState } from "react";
import "../components/Cards.css";
import { useCart, useCartDispatch } from "../misc/CustomProvider";
import { Icon, IconButton } from "rsuite";
import Cart from "../components/Cart";
import Data from "../products.json";

const Checkout = () => {
  /*const removeItem = useContext(RemoveCartContext);
  const handleclick = () => {
    window.location.reload(false);
  };

  let prev_items = JSON.parse(localStorage.getItem("cart")) || [];
  const Quantity = prev_items.length;
  const cartTotal = prev_items.reduce((acc, item) => acc + item.price, 0);*/
  const cart = useCart();
  const dispatchCart = useCartDispatch();
  const [products] = useState(Data);
  const prev_items = getComputedCheckoutItems(products, cart);

  function getComputedCheckoutItems(products, cartItems) {
    const productsInCart = products.filter((p) =>
      cartItems.some((item) => item.id === p.id)
    );

    return productsInCart.map((product) => {
      return {
        ...product,
        quantity: cartItems.find((item) => item.id === product.id).quantity,
      };
    });
  }

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

  //let prev_items = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      <Cart cartTotal={cartTotal} Quantity={Quantity} />

      <div className="column">
        <div style={{ alignContent: "flex-start" }}>
          <div>
            <text style={{ fontSize: 40, marginBottom: 40 }}>Checkout</text>
          </div>
          <div className="cards" style={{ height: 300, width: 1000 }}>
            <div style={{ padding: 40 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>remove</th>
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
                          marginLeft: 50,
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
                          //removeItem(item);
                          //handleclick();
                          handleRemove(item.id);
                        }}
                        icon={<Icon icon="trash" />}
                      />{" "}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
