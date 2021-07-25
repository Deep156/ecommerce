import React from "react";
import "../components/Cards.css";
import Data from "../categories.json";
import { Link } from "react-router-dom";

const HomeCards = () => {
  //const history = useHistory();
  return (
    <div className="row">
      {Data.map((card) => (
        <div
          onClick={
            card.name === "Keyboards" ? (
              <Link to={"/Keyboards"}>Keyboards</Link>
            ) : (
              <Link to="/Headphones">Headphones</Link>
            )
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
/*onClick={
  card.name === "Keyboards"
    ? () => history.push("/Keyboards")
    : () => history.push("/Headphones")
}*/
