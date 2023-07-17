import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      <div className="stars">
        {[...Array(rating.rating)].map((star, index) => {
          return <span className="fa fa-star checked" key={index}></span>;
        })}
      </div>
      <div className="rating_name">
        <img src={rating.img} alt="" />
        <p>{rating.name}</p>
      </div>
      <p>{rating.testimonial}</p>
    </div>
  );
};

export default Rating;
