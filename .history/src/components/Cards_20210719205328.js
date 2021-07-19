import React from "react";
import "../components/Cards.css";
const Cards = () => {
  return (
<div className="card-outer">
    <div className="card">
    <div className="container">
        <h4>
            <p style={{"text-align:center"}}>
                <font size="2">
                   <a href="ex1 website" target="_blank">
                        <b>ex1</b>
                    </a>
                </font>
            </p>
        </h4>
    </div>
</div>
<div className="card">
    <img src="ex2" alt="ex2" style="width:100%"/>
    <div className="container">
        <h4>
            <p style={{"text-align:center"}}>
                <font size="2">
                    <a href="ex2 website" target="_blank">
                        <b>ex2</b>
                    </a>
                </font>
            </p>
        </h4>
    </div>
</div>
</div>
  );
};

export default Cards;
