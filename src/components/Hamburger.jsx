import React from "react";

const Hamburger = ({ openNav }) => {
  return (
    <div className="hamburger_menu" onClick={openNav}>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
    </div>
  );
};

export default Hamburger;
