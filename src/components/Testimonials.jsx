import React from "react";
import Rating from "./Rating";

let ratings = [
  {
    img: "/assets/testimonial1.jpg",
    name: "Malika Jones",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis saepe, earum nesciunt tempore recusandae expedita porro enim id ducimus atque iure reprehenderit sed explicabo consequuntur ",
    rating: 5,
  },
  {
    img: "/assets/testimonial2.jpg",
    name: "Omar Salif",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis saepe, earum nesciunt tempore recusandae expedita porro enim id ducimus atque iure reprehenderit sed ",
    rating: 4,
  },
  {
    img: "/assets/testimonial3.jpg",
    name: "Mike Brown",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis saepe, earum nesciunt tempore recusandae expedita porro enim id ducimus atque iure reprehenderit .",
    rating: 5,
  },
  {
    img: "/assets/testimonial4.jpg",
    name: "Laeticia Jordan",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis saepe, earum nesciunt tempore recusandae expedita porro ",
    rating: 5,
  },
];
const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>What Our Custumers Say!!</h1>
      <div className="testimonial_container">
        {ratings.map((rating, index) => (
          <Rating key={index} rating={rating} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
