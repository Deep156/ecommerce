//import { Button } from "bootstrap";
import React from "react";
import "../components/Cards.css";
//import Sidenavbar from "./Sidenavbar";

const Product = ({ info }) => {
  return (
    <div className="row" style={{ width: "80%" }}>
      {info.map((card) => (
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

            <button disabled={!card.inStock}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
