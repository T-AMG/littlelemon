import React, { useState } from "react";

const BookingForm = ({ hours }) => {
  const [values, setValues] = useState({
    date: "",
    resTime: "",
    guests: "",
    occasion: "",
  });
  const [timeSlots, setTimeSlots] = useState(hours);
  const handleChange = (e) => {
    setValues((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  return (
    <div className="booking">
      <form
        style={{
          display: "grid",
          minWidth: "200px",
          maxWidth: "500px",
          gap: "20px",
          margin: "auto",
        }}
      >
        <label for="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={values.date}
          onChange={handleChange}
        />
        <label for="res-time">Choose time</label>
        <select
          id="res-time "
          name="resTime"
          value={values.resTime}
          onChange={handleChange}
        >
          {timeSlots.map((hour) => (
            <option>{hour}</option>
          ))}
        </select>
        <label for="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={values.guests}
          onChange={handleChange}
        />
        <label for="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={values.occasion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
