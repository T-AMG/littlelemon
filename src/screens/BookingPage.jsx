import React from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = ({ submitForm, availableTimes, dispatch }) => {
  // const timeTable = availableTimes;
  // const changeAvailablesTimes = setAvailablesTimes;
  return (
    <div className="booking_section">
      <h1>Booking Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
