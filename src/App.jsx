import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route
          path="/appointments"
          element={
            <h1 className="p-10 text-4xl font-bold text-[#184E6C]">
              My Appointments
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;