import React from "react";
import "../components/Cards.css";
import Data from "../products.json";

const data = Data.slice(0, 3);
const Category = () => {
  return (
    <div className="row">
      {data.map((card) => (
        <div className="card">
          <img
            src={card.thumbnail}
            alt="Avatar"
            style={{ width: "100%", height: "15vw" }}
          />
          <div className="card-body">
            <h4>
              <b>{card.name}</b>
            </h4>
            <p>
              <b>${card.price}</b>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
