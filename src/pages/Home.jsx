import { Link } from "react-router-dom";

import {
  IconHeartbeat,
  IconBone,
  IconBabyCarriage,
  IconDental,
  IconBrain,
  IconEye,
  IconDroplet,
  IconLungs,
  IconShieldCheck,
  IconClock,
  IconUserCheck,
} from "@tabler/icons-react";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#C7E8F7] text-[#184E6C]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#C7E8F7]">

        {/* Main Hero Image */}
        <img
          src="https://i.pinimg.com/736x/35/e7/bc/35e7bc3489f64f555c01d1ed8ea37871.jpg"
          alt="Healthcare"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Floating Image */}
        <div className="absolute right-[6%] top-[8%] w-[360px] h-[440px] hidden lg:block z-10">
          <img
            src="https://i.pinimg.com/736x/2e/66/d0/2e66d0168c2c7223a59c8b2755e0da8f.jpg"
            alt="Doctor"
            className="w-full h-full object-cover object-center"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 45%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse at center, black 45%, transparent 100%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">

            <p className="text-[#387EA2] font-semibold tracking-wide mb-4">
              WELCOME TO CARELY
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#184E6C]">
              Your Health,
              <br />
              Our Priority
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-[#376A83] max-w-xl">
              Find the right doctor, book your appointment easily,
              and take care of your health with Carely.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/doctors"
                className="px-6 py-3 rounded-xl bg-[#C7E8F7] text-[#184E6C] font-medium shadow-md hover:bg-[#B5DEEF] transition"
              >
                Explore Doctors
              </Link>

              <Link
                to="/booking"
                className="px-6 py-3 rounded-xl bg-white text-[#184E6C] font-medium shadow-md hover:bg-[#F8FCFE] transition"
              >
                Book an Appointment
              </Link>

            </div>

            {/* Hero Badges */}
            <div className="flex flex-wrap items-center gap-4 mt-8">

              <span className="inline-block px-5 py-2.5 rounded-[12px] bg-white border border-[#9BCBE5] text-sm font-medium text-[#387EA2] shadow-sm text-center min-w-[135px]">
                +8 Specialties
              </span>

              <span className="inline-block px-5 py-2.5 rounded-[12px] bg-white border border-[#9BCBE5] text-sm font-medium text-[#387EA2] shadow-sm text-center min-w-[135px]">
                +16 Doctors
              </span>

              <span className="inline-block px-5 py-2.5 rounded-[12px] bg-white border border-[#9BCBE5] text-sm font-medium text-[#387EA2] shadow-sm text-center min-w-[135px]">
                Easy Booking
              </span>

            </div>

          </div>
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div className="flex justify-center">
              <div className="overflow-hidden rounded-3xl w-full max-w-[480px]">
                <img
                  src="https://i.pinimg.com/736x/30/c3/57/30c357f3a946ef043507efd421337aec.jpg"
                  alt="About Carely"
                  className="w-full h-[340px] object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-[#68B0F2] font-semibold mb-3">
                ABOUT CARELY
              </p>

              <h2 className="text-4xl font-bold text-[#184E6C] mb-6">
                Healthcare Made Simple
              </h2>

              <p className="text-[#52788D] leading-8 mb-5">
                Carely makes finding a doctor and booking appointments
                simple, fast, and convenient.
              </p>

              <p className="text-[#52788D] leading-8">
                Whether you need a quick consultation or regular medical
                care, Carely helps you find the right doctor and manage
                your appointments with ease.
              </p>

              <Link
                to="/doctors"
                className="inline-block mt-7 px-6 py-3 rounded-xl bg-[#C7E8F7] text-[#184E6C] font-medium shadow-md hover:bg-[#B5DEEF] transition"
              >
                Find a Doctor
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="relative py-20 overflow-hidden">

        {/* Background Image */}
        <img
          src="https://i.pinimg.com/736x/35/e7/bc/35e7bc3489f64f555c01d1ed8ea37871.jpg"
          alt="Medical services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-sm font-semibold tracking-widest text-[#387EA2]">
              OUR SERVICES
            </p>

            <h2 className="text-4xl font-bold text-[#184E6C] mt-2">
              Medical Specialties
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Choose a specialty to find the right doctor for your needs.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Cardiology */}
            <Link
              to="/doctors?specialty=Cardiology"
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-7 shadow-lg border border-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <IconHeartbeat
                size={48}
                stroke={1.7}
                className="text-[#68B0F2] mb-5"
              />

              <h3 className="text-xl font-bold text-[#184E6C]">
                Cardiology
              </h3>

              <p className="text-gray-600 mt-2">
                Heart and cardiovascular care.
              </p>
            </Link>


            {/* Pediatrics */}
            <Link
              to="/doctors?specialty=Pediatrics"
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-7 shadow-lg border border-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <IconBabyCarriage
                size={48}
                stroke={1.7}
                className="text-[#68B0F2] mb-5"
              />

              <h3 className="text-xl font-bold text-[#184E6C]">
                Pediatrics
              </h3>

              <p className="text-gray-600 mt-2">
                Healthcare for children and infants.
              </p>
            </Link>


            {/* Orthopedics */}
            <Link
              to="/doctors?specialty=Orthopedics"
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-7 shadow-lg border border-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <IconBone
                size={48}
                stroke={1.7}
                className="text-[#68B0F2] mb-5"
              />

              <h3 className="text-xl font-bold text-[#184E6C]">
                Orthopedics
              </h3>

              <p className="text-gray-600 mt-2">
                Bone, joint, and muscle care.
              </p>
            </Link>


            {/* Dentistry */}
            <Link
              to="/doctors?specialty=Dentistry"
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-7 shadow-lg border border-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <IconDental
                size={48}
                stroke={1.7}
                className="text-[#68B0F2] mb-5"
              />

              <h3 className="text-xl font-bold text-[#184E6C]">
                Dentistry
              </h3>

              <p className="text-gray-600 mt-2">
                Dental and oral healthcare.
              </p>
            </Link>


            {/* Neurology */}
            <Link
              to="/doctors?specialty=Neurology"
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-7 shadow-lg border border-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <IconBrain
                size={48}
                stroke={1.7}
                className="text-[#68B0F2] mb-5"
              />

              <h3 className="text-xl font-bold text-[#184E6C]">
                Neurology
              </h3>

              <p className="text-gray-600 mt-2">
                Brain and nervous system care.
              </p>
            </Link>


            {/* Ophthalmology */}
            <Link
              to="/doctors?specialty=Ophthalmology"
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-7 shadow-lg border border-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <IconEye
                size={48}
                stroke={1.7}
                className="text-[#68B0F2] mb-5"
              />

              <h3 className="text-xl font-bold text-[#184E6C]">
                Ophthalmology
              </h3>

              <p className="text-gray-600 mt-2">
                Eye and vision care.
              </p>
            </Link>


            {/* Dermatology */}
            <Link
              to="/doctors?specialty=Dermatology"
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-7 shadow-lg border border-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <IconDroplet
                size={48}
                stroke={1.7}
                className="text-[#68B0F2] mb-5"
              />

              <h3 className="text-xl font-bold text-[#184E6C]">
                Dermatology
              </h3>

              <p className="text-gray-600 mt-2">
                Skin, hair, and nail care.
              </p>
            </Link>


            {/* Pulmonology */}
            <Link
              to="/doctors?specialty=Pulmonology"
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-7 shadow-lg border border-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <IconLungs
                size={48}
                stroke={1.7}
                className="text-[#68B0F2] mb-5"
              />

              <h3 className="text-xl font-bold text-[#184E6C]">
                Pulmonology
              </h3>

              <p className="text-gray-600 mt-2">
                Lung and respiratory care.
              </p>
            </Link>

          </div>
        </div>
      </section>


      {/* ================= WHY CARELY ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-[#68B0F2] font-semibold mb-3">
              WHY CARELY
            </p>

            <h2 className="text-4xl font-bold text-[#184E6C]">
              Healthcare You Can Rely On
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-7">

            {/* Feature 1 */}
            <div className="text-center p-8 rounded-3xl bg-[#F8FCFE] border border-[#E1F1F8]">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#D2EEFC] flex items-center justify-center mb-5">

                <IconShieldCheck
                  size={32}
                  stroke={1.7}
                  className="text-[#68B0F2]"
                />

              </div>

              <h3 className="text-xl font-bold text-[#184E6C] mb-3">
                Trusted
              </h3>

              <p className="text-[#52788D] leading-7">
                A simple platform designed to make healthcare easier
                and more organized.
              </p>

            </div>


            {/* Feature 2 */}
            <div className="text-center p-8 rounded-3xl bg-[#F8FCFE] border border-[#E1F1F8]">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#D2EEFC] flex items-center justify-center mb-5">

                <IconClock
                  size={32}
                  stroke={1.7}
                  className="text-[#68B0F2]"
                />

              </div>

              <h3 className="text-xl font-bold text-[#184E6C] mb-3">
                Convenient
              </h3>

              <p className="text-[#52788D] leading-7">
                Manage your appointments and find doctors without
                unnecessary steps.
              </p>

            </div>


            {/* Feature 3 */}
            <div className="text-center p-8 rounded-3xl bg-[#F8FCFE] border border-[#E1F1F8]">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#D2EEFC] flex items-center justify-center mb-5">

                <IconUserCheck
                  size={32}
                  stroke={1.7}
                  className="text-[#68B0F2]"
                />

              </div>

              <h3 className="text-xl font-bold text-[#184E6C] mb-3">
                User Friendly
              </h3>

              <p className="text-[#52788D] leading-7">
                A clean and easy experience for finding doctors and
                managing your healthcare appointments.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <img
          src="https://i.pinimg.com/736x/d5/4d/f6/d54df680950dbd7614035bf94374aaff.jpg"
          alt="Carely"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <div className="bg-white/85 backdrop-blur-md rounded-[32px] p-10 md:p-14 shadow-xl border border-white">

            <h2 className="text-4xl md:text-5xl font-bold text-[#184E6C]">
              Take Care of Your Health
            </h2>

            <p className="mt-5 text-[#52788D] text-lg max-w-2xl mx-auto leading-8">
              Start your healthcare journey with Carely today.
              Find a doctor and book your appointment with ease.
            </p>

            <Link
              to="/booking"
              className="inline-block mt-8 px-8 py-3.5 rounded-xl bg-[#C7E8F7] text-[#184E6C] font-medium shadow-md hover:bg-[#B5DEEF] transition"
            >
              Book an Appointment
            </Link>

          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}