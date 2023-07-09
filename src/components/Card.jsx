import React from "react";

const Card = ({ special }) => {
  return (
    <div className="card">
      <img
        src={special.img}
        alt={`${special.name} picture`}
        style={{ width: "100%" }}
      />
      <div className="dish_name">
        <p>{special.name}</p>
        <p className="dish_price">${special.price}</p>
      </div>
      <div className="dish_description">
        <div>{special.desc}</div>
        <div className="order_special">Order a delivery</div>
      </div>
    </div>
  );
};

export default Card;
