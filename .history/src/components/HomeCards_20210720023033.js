import React from "react";
import "../components/Cards.css";
import Data from "../categories.json";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Keyboard from "../pages/Keyboard";
import Headphone from "../pages/Headphone";
const HomeCards = () => {
  return (
    <div className="row">
      {Data.map((card) => (
        <div
          onClick={() =>
            card.name === "Keyboards" ? (
              <BrowserRouter>
                <Link to="/Keyboards"></Link>
              </BrowserRouter>
            ) : (
              <BrowserRouter>
                <Link to="/Headphones"></Link>
              </BrowserRouter>
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
      <BrowserRouter>
        <Switch>
          <Route exactpath="/Keyboards">
            <Keyboard />
          </Route>
          <Route exactpath="/Headphones">
            <Headphone />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default HomeCards;
