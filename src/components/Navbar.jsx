import { Link } from "react-router-dom";
import { IconHeartbeat } from "@tabler/icons-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#C7E8F7]/70">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-[#C7E8F7] flex items-center justify-center">
            <IconHeartbeat
              size={24}
              stroke={1.8}
              className="text-[#387EA2]"
            />
          </div>

          <span className="text-[30px] font-semibold tracking-tight text-[#184E6C]">
            Carely
          </span>

        </Link>


        {/* Navigation */}
        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="text-[17px] font-medium text-[#184E6C] hover:text-[#387EA2] transition"
          >
            Home
          </Link>

          <a
            href="/#about"
            className="text-[17px] font-medium text-[#526B7A] hover:text-[#387EA2] transition"
          >
            About
          </a>

          <a
            href="/#services"
            className="text-[17px] font-medium text-[#526B7A] hover:text-[#387EA2] transition"
          >
            Services
          </a>

          <Link
            to="/doctors"
            className="text-[17px] font-medium text-[#526B7A] hover:text-[#387EA2] transition"
          >
            Doctors
          </Link>

          <Link
            to="/appointments"
            className="ml-2 px-5 py-2.5 rounded-xl bg-[#184E6C] text-white text-[15px] font-medium hover:bg-[#387EA2] transition"
          >
            My Appointments
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;