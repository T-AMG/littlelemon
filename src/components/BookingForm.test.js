import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Booking form", () => {
  const availableTimes = ["17:00", "17:30"];
  const submitForm = jest.fn();
  const today = new Date(Date.now());
  const dispatch = jest.fn();
  const submitData = jest.fn();
  test("should correctly render all fields and their default values", async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        submitForm={submitForm}
        dispatch={dispatch}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const timeOptions = screen.getAllByRole("option");
    const numberOfGuestsInput = screen.getByLabelText("Number of guests");
    const submitButton = screen.getByRole("button");
    const occasionSelect = screen.getAllByTestId("occasion");

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");

    expect(numberOfGuestsInput).toHaveAttribute("type", "number");
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("id", "occasion");
    expect(occasionOptions.length).toBe(2);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toBeEnabled();
  });

  test("should successfully submit form with default values", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        submitData={submitData}
        dispatch={dispatch}
      />
    );

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitData).toHaveBeenCalledWith({
      date: today,
      time: availableTimes[0],
      numberOfGuests: 2,
      occasion: "Birthday",
    });
  });

  test(`should display an error message  when date field's value is empty`, () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );
    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: "" } });
    const errorMessage = screen.getByTestId("date-error-message");
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("Please select a date!");
    expect(submitButton).toBeDisabled();
  });

  test(`should display an error message when number of guests field's value is empty`, () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const numberOfGuestsInput = screen.getByTestId("number-guests");
    fireEvent.change(numberOfGuestsInput, { target: { value: "" } });
    const errorMessage = screen.getByTestId("guests-error-message");
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(
      "Number of guests must be between 2 and 10!!"
    );
  });
});
