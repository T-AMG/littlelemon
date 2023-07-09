import React from "react";
import Card from "./Card";

const Specials = () => {
  const specials = [
    {
      name: "Greek Salad",
      desc: "The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and roemary croutons",
      price: 12.99,
      img: "/assets/greek_salad.jpg",
    },
    {
      name: "Bruschetta",
      desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: 7.99,
      img: "/assets/bruchetta.svg",
    },
    {
      name: "Lemon Dessert",
      desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: 18.99,
      img: "/assets/lemon_dessert.jpg",
    },
  ];

  return (
    <div className="specials_container">
      <div className="specials_header">
        <h1>This Weeks Specials!</h1>
        <a className="link_button" href="/">
          Online Menu
        </a>
      </div>
      <div className="specials">
        {specials.map((special, index) => (
          <Card special={special} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Specials;
