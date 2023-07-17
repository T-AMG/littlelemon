import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Booking form", () => {
  const availableTimes = ["17:00", "17:30"];
  const submitForm = jest.fn();
  const today = new Date().toISOString().split("T")[0];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

  render(
    <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
  );

  const heading = screen.getByRole("heading");
  const dateInput = screen.getByLabelText(/Choose date/);
  const timeSelect = screen.getByLabelText(/Choose time/);
  const timeOptions = screen.getAllByRole("option");
  const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
  const submitButton = screen.getByRole("button");
  test("should correctly render all fields and their default values", async () => {
    render(
      <BookingForm availableTimes={availableTimes} submitData={submitData} />
    );
  });

  test("should correctly render all fields and their default values", () => {
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Table reservation");
    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const timeOptions = screen.findAllByTestId("booking-time-option");
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionOptions = screen.findAllByTestId(`booking-occasion-option`);
    const submitButton = screen.getByRole("button");

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    describe("Booking form", () => {
      expect(numberOfGuestsInput).toHaveAttribute("type", "number");
      expect(numberOfGuestsInput).toHaveValue(1);

      expect(occasionSelect).toBeInTheDocument();
      expect(occasionSelect).toHaveAttribute("id", "booking-occasion");
      expect(occasionOptions.length).toBe(2);

      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveAttribute("type", "submit");
      expect(submitButton).toBeEnabled();
    });

    test("should successfully submit form with default values", () => {
      render(
        <BookingForm availableTimes={availableTimes} submitData={submitData} />
      );

      const submitButton = screen.getByRole("button");
      fireEvent.click(submitButton);

      expect(submitData).toHaveBeenCalledWith({
        date: today,
        time: availableTimes[0],
        numberOfGuests: 1,
        occasion: "Birthday",
      });
    });

    //test('', () => {});
    test(`should display an error message and disable sumbit button when date 
    field's value is empty`, () => {
      render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      );

      //test('', () => {});
      const dateInput = screen.getByLabelText(/Date/);
      fireEvent.change(dateInput, { target: { value: "" } });
      fireEvent.blur(dateInput);
      const errorMessage = screen.getByTestId("error-message");
      const submitButton = screen.getByRole("button");

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent("Please choose a valid date");
      expect(submitButton).toBeDisabled();
    });

    test(`should display an error message and disable sumbit button when number of  
    guests field's value is empty`, () => {
      render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      );

      const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
      fireEvent.change(numberOfGuestsInput, { target: { value: "" } });
      fireEvent.blur(numberOfGuestsInput);
      const errorMessage = screen.getByTestId("error-message");
      const submitButton = screen.getByRole("button");

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent(
        "Please enter a number between 1 and 10"
      );
      expect(submitButton).toBeDisabled();
    });
  });
});
