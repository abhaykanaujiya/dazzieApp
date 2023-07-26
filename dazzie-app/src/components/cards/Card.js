import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img src="" alt="img" />
      </div>
      <div className="cardInfo">
        <div className="dishName">name</div>
        <div className="price">$price</div>
      </div>
    </div>
  );
};

export default Card;
