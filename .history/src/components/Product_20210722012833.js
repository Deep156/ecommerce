import React from "react";
import "../components/Cards.css";
import Sidenavbar from "./Sidenavbar";
import styled from "styled-components";

const Product = (props) => {
  const Button = styled.button`
    background-color: black;
    color: white;
    width: 100%;
    padding: 10px 60px;
    border-radius: 15px;

    &:disabled {
      color: grey;
      opacity: 0.7;
    }
  `;
  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        {props.heading}
      </h2>
      <div className="row">
        <Sidenavbar passCheck={(item) => props.passCheck(item)} />
        {props.info ? console.log("hii") : console.log(props.info)}
      </div>
    </div>
  );
};

export default Product;
