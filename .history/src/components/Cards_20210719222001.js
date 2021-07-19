import React from "react";
import "../components/Cards.css";
import Data from "../categories.json";

const Cards = () => {
  return (
    <div className="row">
      {Data.map((card) => {
        return (
          <div className="card">
            <div className="card-body">
              <h1 style={{ textAlign: "center" }}>{card.name}</h1>
              <p>{card.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
