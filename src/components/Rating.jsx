import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      <div className="stars">
        {[...Array(rating.rating)].map((star) => {
          return <span class="fa fa-star checked"></span>;
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
