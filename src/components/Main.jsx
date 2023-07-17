import React, { useReducer } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../screens/HomePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from "../screens/BookingPage";
import { fetchAPI, submitAPI } from "../api";
import ConfirmedBooking from "../screens/ConfirmedBooking";

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

  return (
    <>
      <Header />
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
