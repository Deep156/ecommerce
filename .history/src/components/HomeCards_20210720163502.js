import React, { useCallback } from "react";
import "../components/Cards.css";
import Data from "../categories.json";
import { useHistory } from "react-router-dom";

const HomeCards = () => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/sample"), [history]);
  return (
    <div className="row">
      {Data.map((card) => (
        <div className="card">
          <div className="card-body">
            <h1 style={{ textAlign: "center" }}>{card.name}</h1>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCards;
