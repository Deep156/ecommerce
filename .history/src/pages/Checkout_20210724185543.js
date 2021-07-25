import React, { useContext } from "react";
import "../components/Cards.css";
import { RemoveCartContext } from "../misc/CustomProvider";
import { Icon, IconButton } from "rsuite";

const Checkout = () => {
  const removeItem = useContext(RemoveCartContext);
  const handleclick = () => {
    alert("Item has been removed please refresh");
  };

  let prev_items = JSON.parse(localStorage.getItem("cart")) || [];

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
                      style={{ height: "40px", width: "40px", marginLeft: 50 }}
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
                  >
                    {" "}
                    <IconButton
                      onClick={() => {
                        removeItem(item);
                        handleclick();
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
  );
};

export default Checkout;
