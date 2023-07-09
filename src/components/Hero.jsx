import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <h1>Little Lemon</h1>
          <span>Chicago</span>
          <h5>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </h5>
          <input type="submit" value="Reserve a Table" />
        </div>
        <div className="right">
          <img src="assets/restauranfood.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
