import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="assets/restaurant_chef_B.jpg"
          width="200px"
          height="150px"
          alt="little lemon chef"
        />
        <div className="footer_nav">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Menu</Link>
              </li>
              <li>
                <Link to="/booking">Reservation</Link>
              </li>
              <li>
                <Link to="/">Order online</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>Contact</div>
        <div>Social Media Links</div>
      </div>
      <div className="copyright">&copy; Copyright 2023 Tamg-Labs </div>
    </footer>
  );
};

export default Footer;
