import React from "react";
//import { Button } from "rsuite";
import "../components/Cards.css";
import Sidenavbar from "./Sidenavbar";
import styled from "styled-components";

const Product = (props) => {
  const Button = styled.button`
    margin-top: 20;
    background-color: black;
    color: "white";
    width: "100%";

    &:disabled {
      color: grey;
      opacity: 0.7;
      cursor: default;
    }
  `;
  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="row">
        <Sidenavbar passCheck={(item) => props.passCheck(item)} />
        {props.info.map((card) => (
          <div className="card">
            <img
              src={card.thumbnail}
              alt="Avatar"
              style={{ width: "100%", height: "15vw", objectFit: "cover" }}
            />
            <div className="card-body">
              <h4>
                <b>{card.name}</b>
              </h4>
              <p>
                <b>${card.price}</b>
              </p>
              <p style={{ textAlign: "center" }}>
                {card.inStock ? (
                  <b style={{ color: "green" }}> STOCK</b>
                ) : (
                  <b style={{ color: "red" }}>OUT OF STOCK</b>
                )}
              </p>

              <Button
                disabled={!card.inStock}
                onClick={() => console.log("add to cart")}
              >
                Add to cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
