import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";

// Restore dark mode before React starts
const savedDarkMode = localStorage.getItem("darkMode");

if (savedDarkMode === "true") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-right" />
    <App />
  </StrictMode>
);