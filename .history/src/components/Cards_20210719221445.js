import React from "react";
import "../components/Cards.css";
import Data from "../categories.json";

const Cards = () => {
  return (
    <div>
      {Data.map((card, index) => {
        return;
        <div className="row">
          <div className="card">
            <div className="card-body">
              <h1 style={{ textAlign: "center" }}>Keyboard</h1>
              <p>Buy different keyboard from any brand available</p>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Cards;
