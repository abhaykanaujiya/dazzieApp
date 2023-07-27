import React from "react";
import "./card.css";
import dish from "../../assets/dish.jpg"

const Card = (props) => {
  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img className="dishImage" src={dish} alt="img" />
      </div>
      <div className="cardInfo">
        <div className="dishName">name</div>
        <div className="price">$price</div>
      </div>
    </div>
  );
};

export default Card;
