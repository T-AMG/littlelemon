import React, { useState } from "react";

const BookingForm = ({ submitForm, availableTimes, dispatch }) => {
  const [values, setValues] = useState({
    date: "",
    resTime: "",
    guests: "",
    occasion: "",
    errors: {},
  });

  const handleChange = (e) => {
    if (e.target.name === "date") {
      dispatch({ type: "select_date", payload: { date: e.target.value } });
    }
    setValues((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const validation = (values) => {
    setValues({ ...values }, delete values.errors.date);
    setValues({ ...values }, delete values.errors.guests);
    setValues({ ...values }, delete values.errors.occasion);
    setValues({ ...values }, delete values.errors.resTime);
    if (values.date === "") {
      setValues({ ...values }, (values.errors.date = "Please select a date!"));
    }
    if (values.resTime === "") {
      setValues({ ...values }, (values.errors.resTime = "Please select time!"));
    }
    if (values.guests < 2 || values.guests > 10) {
      setValues(
        { ...values },
        (values.errors.guests = "Number of guests must be between 2 and 10!! ")
      );
    }
    if (values.occasion === "") {
      setValues(
        { ...values },
        (values.errors.occasion = "Please select the type of occasion ")
      );
    }
    if (
      values.errors.date != undefined ||
      values.errors.guests != undefined ||
      values.errors.occasion != undefined ||
      values.errors.resTime != undefined
    ) {
      return false;
    }
    return true;
  };
  const submit = (e) => {
    e.preventDefault();

    if (validation(values)) {
      console.log("validate!!");
      submitForm(values);
    }
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
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" name="date" onChange={handleChange} />
        <span className="error" data-testid="date-error-message">
          {values.errors.date}
        </span>

        <label htmlFor="res-time">Choose time</label>
        <select
          data-testid="res-time "
          id="res-time "
          name="resTime"
          onChange={handleChange}
        >
          <option value="" disabled selected hidden>
            -- Select your reservation time --
          </option>
          {availableTimes.map((timeSlot, index) => (
            <option key={index}>{timeSlot}</option>
          ))}
        </select>
        <span className="error" data-testid="time-error-message">
          {values.errors.resTime}
        </span>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="2"
          max="10"
          id="guests"
          name="guests"
          data-testid="number-guests"
          required
          onChange={handleChange}
        />
        <span className="error" data-testid="guests-error-message">
          {values.errors.guests}
        </span>

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          onChange={handleChange}
          data-testid="occasion"
        >
          <option value="" disabled selected hidden>
            -- Choose the type of occasion --
          </option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <span className="error" data-testid="occasion-error-message">
          {values.errors.occasion}
        </span>
        <button onClick={submit}>Submit Your reservation</button>
      </form>
    </div>
  );
};

export default BookingForm;
