import React from "react";
import "../components/Cards.css";
import Data from "../products.json";

const data = Data.slice(0, 3);
const Category = () => {
  return (
    <div className="row">
      {data.map((card) => (
        <div className="card">
          <img src={card.thumbnail} alt="Avatar" style={{ width: "100%" }} />
          <div className="card-body">
            <h4>
              <b>Jane Doe</b>
            </h4>
            <p>Interior Designer</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
