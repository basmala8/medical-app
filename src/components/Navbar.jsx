import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconHeartbeat,
  IconMenu2,
  IconX,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isDark, setIsDark] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    const darkMode = !isDark;

    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem("darkMode", darkMode);

    setIsDark(darkMode);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#172554] border-b border-[#C7E8F7] dark:border-[#3A4775] transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 shrink-0"
          >

            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#C7E8F7] dark:bg-[#344274] flex items-center justify-center">

              <IconHeartbeat
                size={20}
                stroke={1.8}
                className="text-[#387EA2] dark:text-[#8DD3FF]"
              />

            </div>

            <span className="text-[25px] sm:text-[30px] font-semibold tracking-tight text-[#184E6C] dark:text-white">
              Carely
            </span>

          </Link>


          {/* Desktop */}

          <div className="hidden sm:flex items-center gap-5 lg:gap-7">

            <Link
              to="/"
              className="text-[16px] lg:text-[17px] font-medium text-[#184E6C] dark:text-white hover:text-[#387EA2] dark:hover:text-[#8DD3FF] transition"
            >
              Home
            </Link>

            <a
              href="/#services"
              className="text-[16px] lg:text-[17px] font-medium text-[#526B7A] dark:text-white hover:text-[#387EA2] dark:hover:text-[#8DD3FF] transition"
            >
              Services
            </a>

            <a
              href="/#about"
              className="text-[16px] lg:text-[17px] font-medium text-[#526B7A] dark:text-white hover:text-[#387EA2] dark:hover:text-[#8DD3FF] transition"
            >
              About
            </a>

            <Link
              to="/doctors"
              className="text-[16px] lg:text-[17px] font-medium text-[#526B7A] dark:text-white hover:text-[#387EA2] dark:hover:text-[#8DD3FF] transition"
            >
              Doctors
            </Link>

            <Link
              to="/favorites"
              className="text-[16px] lg:text-[17px] font-medium text-[#526B7A] dark:text-white hover:text-[#387EA2] dark:hover:text-[#8DD3FF] transition"
            >
              Favorites ❤️
            </Link>

            <Link
              to="/profile"
              className="text-[16px] lg:text-[17px] font-medium text-[#526B7A] dark:text-white hover:text-[#387EA2] dark:hover:text-[#8DD3FF] transition"
            >
              Profile
            </Link>

            <Link
              to="/appointments"
              className="px-4 lg:px-5 py-2.5 rounded-xl bg-[#184E6C] dark:bg-[#387EA2] text-white text-[14px] lg:text-[15px] font-medium hover:bg-[#387EA2] dark:hover:bg-[#68B0F2] transition whitespace-nowrap"
            >
              My Appointments
            </Link>

            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-xl bg-[#C7E8F7] dark:bg-[#344274] text-[#184E6C] dark:text-white flex items-center justify-center hover:scale-105 transition cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <IconSun size={20} />
              ) : (
                <IconMoon size={20} />
              )}
            </button>

          </div>


          {/* Mobile Buttons */}

          <div className="sm:hidden flex items-center gap-2">

            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 rounded-lg bg-[#C7E8F7] dark:bg-[#344274] text-[#184E6C] dark:text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <IconSun size={19} />
              ) : (
                <IconMoon size={19} />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-lg bg-[#C7E8F7] dark:bg-[#344274] text-[#184E6C] dark:text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <IconX size={21} stroke={1.8} />
              ) : (
                <IconMenu2 size={21} stroke={1.8} />
              )}
            </button>

          </div>

        </div>


        {/* Mobile Menu */}

        {isOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#D9EEF7] dark:border-[#3A4775]">

            <div className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-[#184E6C] dark:text-white font-medium hover:bg-[#F0FAFE] dark:hover:bg-[#344274] transition"
              >
                Home
              </Link>

              <a
                href="/#services"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-[#526B7A] dark:text-white font-medium hover:bg-[#F0FAFE] dark:hover:bg-[#344274] transition"
              >
                Services
              </a>

              <a
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-[#526B7A] dark:text-white font-medium hover:bg-[#F0FAFE] dark:hover:bg-[#344274] transition"
              >
                About
              </a>

              <Link
                to="/doctors"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-[#526B7A] dark:text-white font-medium hover:bg-[#F0FAFE] dark:hover:bg-[#344274] transition"
              >
                Doctors
              </Link>

              <Link
                to="/favorites"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-[#526B7A] dark:text-white font-medium hover:bg-[#F0FAFE] dark:hover:bg-[#344274] transition"
              >
                Favorites ❤️
              </Link>

              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-[#526B7A] dark:text-white font-medium hover:bg-[#F0FAFE] dark:hover:bg-[#344274] transition"
              >
                Profile
              </Link>

              <Link
                to="/appointments"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl bg-[#184E6C] dark:bg-[#387EA2] text-white font-medium hover:bg-[#387EA2] dark:hover:bg-[#68B0F2] transition"
              >
                My Appointments
              </Link>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;