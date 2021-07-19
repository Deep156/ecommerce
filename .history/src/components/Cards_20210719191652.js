import React from "react";

const Cards = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2>Keyboard</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <h5>{this.props.author}</h5>
      </div>
    </div>
  );
};

export default Cards;
