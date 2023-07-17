import { render, screen } from "@testing-library/react";
import BookingPage from "./screens/BookingPage";
import BookingForm from "./components/BookingForm";
import Main from "./components/Main";

const availableTimes = ["17:00", "17:30", "18:00"];
test("renders the BookingForm heading", () => {
  render(<BookingPage availableTimes={availableTimes} />);
  const headingElement = screen.getByText("Booking Page");
  expect(headingElement).toBeInTheDocument();
});

test("initializes available times on init", () => {
  // Act
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  const timeOptions = screen.getAllByTestId("res-time");
  // Assert
  expect(timeOptions.length).toBeGreaterThan(0);
});
