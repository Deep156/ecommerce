import React from "react";
import "../components/Cards.css";

const Product = ({ info }) => {
  return (
    <div className="row">
      {info.map((card) => (
        <div className="card">
          <img
            src={card.thumbnail}
            alt="Avatar"
            style={{ width: "100%", height: "20vw", objectFit: "cover" }}
          />
          <div className="card-body">
            <h4>
              <b>{card.name}</b>
            </h4>
            <p>
              <b>${card.price}</b>
            </p>

            {card.inStock ? (
              <p style={{ textAlign: "center" }}>
                <b style={{ color: "green" }}> Stock</b>
              </p>
            ) : (
              <p>
                <b style={{ color: "red" }}>OUT OF STOCK</b>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
