import { Link } from "react-router-dom";
import { IconHeartbeat } from "@tabler/icons-react";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#184E6C] text-white pt-16 pb-6 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-[#C7E8F7] flex items-center justify-center">
                <IconHeartbeat
                  size={24}
                  stroke={1.8}
                  className="text-[#387EA2]"
                />
              </div>

              <span className="text-2xl font-semibold">
                Carely
              </span>

            </div>

            <p className="mt-5 text-blue-100/70 leading-relaxed">
              Simple and convenient healthcare for everyone.
            </p>

            <div className="flex gap-4 mt-6">

              <span className="text-blue-100/70 hover:text-white cursor-pointer transition-colors duration-200">
                f
              </span>

              <span className="text-blue-100/70 hover:text-white cursor-pointer transition-colors duration-200">
                𝕏
              </span>

              <span className="text-blue-100/70 hover:text-white cursor-pointer transition-colors duration-200">
                in
              </span>

              <span className="text-blue-100/70 hover:text-white cursor-pointer transition-colors duration-200">
                ◎
              </span>

            </div>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-blue-100/70 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>

              <a
                href="/#about"
                className="text-blue-100/70 hover:text-white transition-colors duration-200"
              >
                About
              </a>

              <a
                href="/#services"
                className="text-blue-100/70 hover:text-white transition-colors duration-200"
              >
                Services
              </a>

              <Link
                to="/doctors"
                className="text-blue-100/70 hover:text-white transition-colors duration-200"
              >
                Doctors
              </Link>

              <Link
                to="/appointments"
                className="text-blue-100/70 hover:text-white transition-colors duration-200"
              >
                My Appointments
              </Link>

            </div>

          </div>


          {/* Specialties */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-5">
              Specialties
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/doctors?specialty=Cardiology"
                className="text-blue-100/70 hover:text-white transition-colors duration-200"
              >
                Cardiology
              </Link>

              <Link
                to="/doctors?specialty=Pediatrics"
                className="text-blue-100/70 hover:text-white transition-colors duration-200"
              >
                Pediatrics
              </Link>

              <Link
                to="/doctors?specialty=Orthopedics"
                className="text-blue-100/70 hover:text-white transition-colors duration-200"
              >
                Orthopedics
              </Link>

              <Link
                to="/doctors?specialty=Dentistry"
                className="text-blue-100/70 hover:text-white transition-colors duration-200"
              >
                Dentistry
              </Link>

              <Link
                to="/doctors?specialty=Neurology"
                className="text-blue-100/70 hover:text-white transition-colors duration-200"
              >
                Neurology
              </Link>

              <Link
                to="/doctors?specialty=Ophthalmology"
                className="text-blue-100/70 hover:text-white transition-colors duration-200"
              >
                Ophthalmology
              </Link>

            </div>

          </div>


          {/* Contact & Newsletter */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-5">
              Contact & Newsletter
            </h3>

            <div className="space-y-3 text-blue-100/70">

              <p>Emergency: 123</p>
              <p> support@carely.com</p>
              <p>Egypt</p>

            </div>

            <div className="flex mt-6 gap-2">

              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl bg-white text-[#184E6C] outline-none"
              />

              <button
                className="px-5 py-3 rounded-xl bg-[#387EA2] text-white font-medium hover:bg-[#5BA3C6] transition-colors duration-200"
              >
                Subscribe
              </button>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/50">

          <p>
            © 2026 Carely. All rights reserved.
          </p>

          <div className="flex gap-5">

            <span className="hover:text-white cursor-pointer transition-colors duration-200">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer transition-colors duration-200">
              Terms of Service
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;