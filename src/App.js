import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import HomePage from "./screens/HomePage";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./screens/BookingPage";

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
