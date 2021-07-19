import React from "react";
import "../components/Cards.css";
const Cards = () => {
  return (
    <div className="card-outer">
      <div className="card">
        <div className="container">
          <h4>
            <p style={{ textAlign: "center" }}>
              <font size="2">
                <a href="ex1 website" target="_blank">
                  <b>ex1</b>
                </a>
              </font>
            </p>
          </h4>
        </div>
      </div>
      <div className="card">
        <div className="container">
          <h1 style={{ textAlign: "center" }}>KEYBOARD</h1>
        </div>
      </div>
    </div>
  );
};

export default Cards;
