import React from "react";
import "../components/Cards.css";
const Cards = () => {
  return (
    <div className="row">
      <div className="card">
        <div className="card-body">
          <h1 style={{ textAlign: "center" }}>Keyboard</h1>
          <div class="hide">
            I am shown when someone hovers over the div above.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h1 style={{ textAlign: "center" }}>Headphones</h1>
        </div>
      </div>
    </div>
  );
};

export default Cards;
