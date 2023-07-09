import React from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = () => {
  let hours = ["17:00", "19:00", "20:00", "21:00", "22:00"];
  return (
    <div className="booking_section">
      <h1>Booking Page</h1>
      <BookingForm hours={hours} />
    </div>
  );
};

export default BookingPage;
