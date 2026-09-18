import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DarkHome from "./pages/DarkHome";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Booking from "./pages/Booking";
import Appointments from "./pages/Appointments";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(
        document.documentElement.classList.contains("dark")
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={isDark ? <DarkHome /> : <Home />}
        />

        <Route path="/doctors" element={<Doctors />} />

        <Route
          path="/doctors/:id"
          element={<DoctorDetails />}
        />

        <Route path="/booking" element={<Booking />} />

        <Route
          path="/appointments"
          element={<Appointments />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;