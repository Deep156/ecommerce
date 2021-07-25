import React from "react";
import "../components/Cards.css";
import Data from "../categories.json";
//import { useHistory } from "react-router-dom";

const HomeCards = (props) => {
  //const history = useHistory();
  return (
    <div className="row">
      {Data.map((card) => (
        <div
          onClick={
            card.name === "Keyboards"
              ? () => props.history.push("/Keyboards")
              : () => props.history.push("/Headphones")
          }
          className="card"
        >
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
