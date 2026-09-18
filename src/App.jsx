import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Booking from "./pages/Booking";
import Appointments from "./pages/Appointments";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route path="/doctors/:id" element={<DoctorDetails />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Router>
  );
}

export default App;