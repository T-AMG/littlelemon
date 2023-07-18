import React, { useReducer } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../screens/HomePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from "../screens/BookingPage";
import { fetchAPI, submitAPI } from "../api";
import ConfirmedBooking from "../screens/ConfirmedBooking";
import { Link } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  /** Reducer function that updates the timeslots available given a date */
  function updateTimes(availableTimes, action) {
    if (action.type === "select_date") {
      availableTimes = fetchAPI(new Date(action.payload.date));
      return availableTimes;
    }
    if (action.type === "clear_date") {
      return (availableTimes = []);
    }
    return availableTimes;
  }

  /**Function that initializes the timeslots available given for the date of today */
  const initializeTimes = () => {
    let slots = fetchAPI(new Date(Date.now()));
    return slots;
  };

  /**Function that submits the form's data to the API */
  const submitForm = (formData) => {
    submitAPI(formData);
    console.log(formData);
    navigate("/confirmation");
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const openNav = () => {
    const backdrop = document.getElementById("backdrop");

    if (backdrop.style.display === "") {
      backdrop.style.display = "block";
      return;
    }
    if (backdrop.style.display === "none") {
      backdrop.style.display = "block";
      return;
    }
    if (backdrop.style.display === "block") {
      backdrop.style.display = "none";
      return;
    }
  };

  return (
    <>
      <Header openNav={openNav} />
      <div className="backdrop" id="backdrop" onClick={openNav}>
        <nav className="mobile header_nav " id="mobile_nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <Link to="/booking" className="order">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              submitForm={submitForm}
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        ></Route>
        <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
