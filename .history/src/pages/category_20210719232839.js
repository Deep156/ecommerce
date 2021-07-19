import React from "react";
import "../components/Cards.css";
const Category = () => {
  return (
    <div className="card">
      <img src={"img_avatar2.png"} alt="Avatar" style={{ width: "100%" }} />
      <div className="card-body">
        <h4>
          <b>Jane Doe</b>
        </h4>
        <p>Interior Designer</p>
      </div>
    </div>
  );
};

export default Category;
