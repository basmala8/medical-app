import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconHeartbeat,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#C7E8F7]/70">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

        {/* ================= TOP NAVBAR ================= */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 shrink-0"
          >

            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#C7E8F7] flex items-center justify-center">

              <IconHeartbeat
                size={20}
                stroke={1.8}
                className="text-[#387EA2]"
              />

            </div>

            <span className="text-[25px] sm:text-[30px] font-semibold tracking-tight text-[#184E6C]">
              Carely
            </span>

          </Link>

          {/* ================= DESKTOP NAVBAR ================= */}
          <div className="hidden sm:flex items-center gap-5 lg:gap-7">

            <Link
              to="/"
              className="text-[16px] lg:text-[17px] font-medium text-[#184E6C] hover:text-[#387EA2] transition"
            >
              Home
            </Link>

            <a
              href="/#services"
              className="text-[16px] lg:text-[17px] font-medium text-[#526B7A] hover:text-[#387EA2] transition"
            >
              Services
            </a>

            <a
              href="/#about"
              className="text-[16px] lg:text-[17px] font-medium text-[#526B7A] hover:text-[#387EA2] transition"
            >
              About
            </a>

            <Link
              to="/doctors"
              className="text-[16px] lg:text-[17px] font-medium text-[#526B7A] hover:text-[#387EA2] transition"
            >
              Doctors
            </Link>

            <Link
              to="/appointments"
              className="px-4 lg:px-5 py-2.5 rounded-xl bg-[#184E6C] text-white text-[14px] lg:text-[15px] font-medium hover:bg-[#387EA2] transition whitespace-nowrap"
            >
              My Appointments
            </Link>

          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden w-9 h-9 rounded-lg bg-[#C7E8F7] flex items-center justify-center text-[#184E6C] hover:bg-[#B5DEEF] transition"
            aria-label="Toggle menu"
          >

            {isOpen ? (
              <IconX size={21} stroke={1.8} />
            ) : (
              <IconMenu2 size={21} stroke={1.8} />
            )}

          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#D9EEF7]">

            <div className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-[#184E6C] font-medium hover:bg-[#F0FAFE] transition"
              >
                Home
              </Link>

              <a
                href="/#services"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-[#526B7A] font-medium hover:bg-[#F0FAFE] transition"
              >
                Services
              </a>

              <a
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-[#526B7A] font-medium hover:bg-[#F0FAFE] transition"
              >
                About
              </a>

              <Link
                to="/doctors"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-[#526B7A] font-medium hover:bg-[#F0FAFE] transition"
              >
                Doctors
              </Link>

              <Link
                to="/appointments"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl bg-[#184E6C] text-white font-medium hover:bg-[#387EA2] transition"
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