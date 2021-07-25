import React from "react";
import "../components/Cards.css";
import Data from "../categories.json";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <div className="row">
      {Data.map((card) => (
        <Link to="/Keyboards">
          <div className="card">
            <div className="card-body">
              <h1 style={{ textAlign: "center" }}>{card.name}</h1>
              <p>{card.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeCards;
