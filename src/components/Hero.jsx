import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nihil
          eius nobis sint asperiores perferendis earum quisquam ullam quae.
          Magnam consectetur, minima sequi consequatur deleniti harum enim ab
          perspiciatis quas?
        </h5>
        <input type="submit" value="Reserve a Table" />
      </div>
      <div className="right">
        <img src="assets/restaurant.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
