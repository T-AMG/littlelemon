import React from "react";

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
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Menu</a>
              </li>
              <li>
                <a href="">Reservation</a>
              </li>
              <li>
                <a href="">Order online</a>
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
