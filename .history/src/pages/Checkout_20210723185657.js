import React from "react";
import "../components/Cards.css";

const Checkout = () => {
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
              {/* for line */}
              <tr style={{ borderCollapse: "collapse" }}>
                <td
                  style={{
                    borderTopWidth: 2,
                    borderTopStyle: "solid",
                    borderTopColor: "black",
                    borderCollapse: "collapse",
                  }}
                >
                  Price
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
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
