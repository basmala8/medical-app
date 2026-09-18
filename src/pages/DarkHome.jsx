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

export default function DarkHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#10172F] via-[#202A52] to-[#342B58] text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[380px] sm:min-h-[500px] overflow-hidden">

        <img
          src="https://i.pinimg.com/736x/35/e7/bc/35e7bc3489f64f555c01d1ed8ea37871.jpg"
          alt="Healthcare"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#10172F]/90 via-[#202A52]/60 to-[#342B58]/30"></div>

        {/* Floating Doctor */}
        <div className="absolute right-0 sm:right-[4%] lg:right-[6%] top-[7%] sm:top-[10%] lg:top-[8%] w-[135px] h-[190px] sm:w-[180px] sm:h-[240px] lg:w-[330px] lg:h-[400px] z-10">
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

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-16">

          <div className="max-w-2xl pr-0 sm:pr-36 lg:pr-0">

            <p className="text-[#9EDCFF] font-semibold tracking-wide mb-3 text-xs sm:text-base">
              WELCOME TO CARELY
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              Your Health,
              <br />
              Our Priority
            </h1>

            <p className="sm:hidden mt-4 text-sm leading-relaxed text-[#D8E4FF]">
              Find the right doctor for you,
              <br />
              book your appointment easily,
              <br />
              and take care of your health with Carely.
            </p>

            <p className="hidden sm:block mt-5 text-lg md:text-xl leading-relaxed text-[#D8E4FF] max-w-xl">
              Find the right doctor, book your appointment easily,
              <br />
              and take care of your health with Carely.
            </p>

            <div className="flex justify-center sm:justify-start mt-5 sm:mt-6">

              <a
                href="#services"
                className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#68B0F2] text-white font-medium shadow-lg hover:bg-[#82C8FF] transition text-xs sm:text-base"
              >
                <span>Explore Our Services</span>

                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#182142] text-[#9EDCFF] flex items-center justify-center text-sm sm:text-base">
                  →
                </span>

              </a>

            </div>

            {/* Hero Badges */}
            <div className="mt-5 sm:mt-6 w-full bg-gradient-to-r from-[#26345F]/95 via-[#35416D]/95 to-[#403763]/95 rounded-2xl shadow-lg border border-[#64709A] overflow-hidden">

              <div className="grid grid-cols-3 divide-x divide-[#64709A]">

                <div className="flex items-center justify-center px-2 py-3 sm:px-4 sm:py-4 text-center">
                  <span className="text-[10px] sm:text-sm font-medium text-[#B9E5FF] whitespace-nowrap">
                    +8 Specialties
                  </span>
                </div>

                <div className="flex items-center justify-center px-2 py-3 sm:px-4 sm:py-4 text-center">
                  <span className="text-[10px] sm:text-sm font-medium text-[#B9E5FF] whitespace-nowrap">
                    +16 Doctors
                  </span>
                </div>

                <div className="flex items-center justify-center px-2 py-3 sm:px-4 sm:py-4 text-center">
                  <span className="text-[10px] sm:text-sm font-medium text-[#B9E5FF] whitespace-nowrap">
                    Easy Booking
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="bg-gradient-to-br from-[#151D3E] via-[#252E59] to-[#342E5A] py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            <div className="flex justify-center">

              <div className="overflow-hidden rounded-3xl w-full max-w-[480px]">

                <img
                  src="https://i.pinimg.com/736x/30/c3/57/30c357f3a946ef043507efd421337aec.jpg"
                  alt="About Carely"
                  className="w-full h-[240px] sm:h-[340px] object-cover"
                />

              </div>

            </div>

            <div>

              <p className="text-[#9EDCFF] font-semibold mb-3">
                ABOUT CARELY
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Healthcare Made Simple
              </h2>

              <p className="sm:hidden text-[#D5DFFF] leading-7 text-sm">
                Carely makes finding a doctor and booking appointments simple,
                fast, and convenient.
              </p>

              <p className="hidden sm:block text-[#D5DFFF] leading-8 mb-5">
                Carely makes finding a doctor and booking appointments
                simple, fast, and convenient.
              </p>

              <p className="sm:hidden text-[#D5DFFF] leading-7 text-sm mt-4">
                Whether you need a quick consultation or regular medical care,
                Carely helps you find the right doctor and manage your
                appointments with ease.
              </p>

              <p className="hidden sm:block text-[#D5DFFF] leading-8">
                Whether you need a quick consultation or regular medical
                care, Carely helps you find the right doctor and manage
                your appointments with ease.
              </p>

              <Link
                to="/doctors"
                className="inline-block mt-7 px-6 py-3 rounded-xl bg-gradient-to-r from-[#3B4775] to-[#596795] text-white font-medium shadow-md hover:from-[#4B598A] hover:to-[#6876A5] transition"
              >
                Find a Doctor
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="relative py-16 sm:py-20 overflow-hidden"
      >

        <img
          src="https://i.pinimg.com/736x/35/e7/bc/35e7bc3489f64f555c01d1ed8ea37871.jpg"
          alt="Medical services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#111936]/90 via-[#202A52]/85 to-[#3B3565]/80"></div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

          <div className="text-center mb-10 sm:mb-12">

            <p className="text-sm font-semibold tracking-widest text-[#9EDCFF]">
              OUR SERVICES
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Medical Specialties
            </h2>

            <p className="text-[#D5DFFF] mt-4 max-w-2xl mx-auto">
              Choose a specialty to find the right doctor for your needs.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

            {/* Cardiology */}
            <Link
              to="/doctors?specialty=Cardiology"
              className="group bg-gradient-to-br from-[#202A52]/95 to-[#303A67]/95 backdrop-blur-sm rounded-3xl p-6 sm:p-7 shadow-xl border border-[#59658F] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <IconHeartbeat
                size={48}
                stroke={1.7}
                className="text-[#9EDCFF] mb-5"
              />

              <h3 className="text-xl font-bold text-white">
                Cardiology
              </h3>

              <p className="text-[#D5DFFF] mt-2">
                Heart and cardiovascular care.
              </p>
            </Link>

            {/* Pediatrics */}
            <Link
              to="/doctors?specialty=Pediatrics"
              className="group bg-gradient-to-br from-[#292F5B]/95 to-[#403866]/95 backdrop-blur-sm rounded-3xl p-6 sm:p-7 shadow-xl border border-[#626E96] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <IconBabyCarriage
                size={48}
                stroke={1.7}
                className="text-[#B9AEFF] mb-5"
              />

              <h3 className="text-xl font-bold text-white">
                Pediatrics
              </h3>

              <p className="text-[#D5DFFF] mt-2">
                Healthcare for children and infants.
              </p>
            </Link>

            {/* Orthopedics */}
            <Link
              to="/doctors?specialty=Orthopedics"
              className="group bg-gradient-to-br from-[#25335D]/95 to-[#35466F]/95 backdrop-blur-sm rounded-3xl p-6 sm:p-7 shadow-xl border border-[#66759D] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <IconBone
                size={48}
                stroke={1.7}
                className="text-[#A9DFFF] mb-5"
              />

              <h3 className="text-xl font-bold text-white">
                Orthopedics
              </h3>

              <p className="text-[#D5DFFF] mt-2">
                Bone, joint, and muscle care.
              </p>
            </Link>

            {/* Dentistry */}
            <Link
              to="/doctors?specialty=Dentistry"
              className="group bg-gradient-to-br from-[#202A52]/95 to-[#3B3565]/95 backdrop-blur-sm rounded-3xl p-6 sm:p-7 shadow-xl border border-[#59658F] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <IconDental
                size={48}
                stroke={1.7}
                className="text-[#9EDCFF] mb-5"
              />

              <h3 className="text-xl font-bold text-white">
                Dentistry
              </h3>

              <p className="text-[#D5DFFF] mt-2">
                Dental and oral healthcare.
              </p>
            </Link>

            {/* Neurology */}
            <Link
              to="/doctors?specialty=Neurology"
              className="group bg-gradient-to-br from-[#292F5B]/95 to-[#403866]/95 backdrop-blur-sm rounded-3xl p-6 sm:p-7 shadow-xl border border-[#626E96] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <IconBrain
                size={48}
                stroke={1.7}
                className="text-[#B9AEFF] mb-5"
              />

              <h3 className="text-xl font-bold text-white">
                Neurology
              </h3>

              <p className="text-[#D5DFFF] mt-2">
                Brain and nervous system care.
              </p>
            </Link>

            {/* Ophthalmology */}
            <Link
              to="/doctors?specialty=Ophthalmology"
              className="group bg-gradient-to-br from-[#25335D]/95 to-[#35466F]/95 backdrop-blur-sm rounded-3xl p-6 sm:p-7 shadow-xl border border-[#66759D] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <IconEye
                size={48}
                stroke={1.7}
                className="text-[#A9DFFF] mb-5"
              />

              <h3 className="text-xl font-bold text-white">
                Ophthalmology
              </h3>

              <p className="text-[#D5DFFF] mt-2">
                Eye and vision care.
              </p>
            </Link>

            {/* Dermatology */}
            <Link
              to="/doctors?specialty=Dermatology"
              className="group bg-gradient-to-br from-[#202A52]/95 to-[#303A67]/95 backdrop-blur-sm rounded-3xl p-6 sm:p-7 shadow-xl border border-[#59658F] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <IconDroplet
                size={48}
                stroke={1.7}
                className="text-[#9EDCFF] mb-5"
              />

              <h3 className="text-xl font-bold text-white">
                Dermatology
              </h3>

              <p className="text-[#D5DFFF] mt-2">
                Skin, hair, and nail care.
              </p>
            </Link>

            {/* Pulmonology */}
            <Link
              to="/doctors?specialty=Pulmonology"
              className="group bg-gradient-to-br from-[#292F5B]/95 to-[#403866]/95 backdrop-blur-sm rounded-3xl p-6 sm:p-7 shadow-xl border border-[#626E96] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <IconLungs
                size={48}
                stroke={1.7}
                className="text-[#B9AEFF] mb-5"
              />

              <h3 className="text-xl font-bold text-white">
                Pulmonology
              </h3>

              <p className="text-[#D5DFFF] mt-2">
                Lung and respiratory care.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= WHY CARELY ================= */}
      <section className="bg-gradient-to-br from-[#151D3E] via-[#252E59] to-[#342E5A] py-16 sm:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          <div className="text-center mb-10 sm:mb-14">

            <p className="text-[#9EDCFF] font-semibold mb-3">
              WHY CARELY
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Healthcare You Can Rely On
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">

            {/* Trusted */}
            <div className="text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#202A52] to-[#303A67] border border-[#59658F] shadow-lg">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#394674] flex items-center justify-center mb-5">

                <IconShieldCheck
                  size={32}
                  stroke={1.7}
                  className="text-[#9EDCFF]"
                />

              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Trusted
              </h3>

              <p className="text-[#D5DFFF] leading-7">
                A simple platform designed to make healthcare easier
                and more organized.
              </p>

            </div>

            {/* Convenient */}
            <div className="text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#28345E] to-[#3B3565] border border-[#626E96] shadow-lg">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#414D78] flex items-center justify-center mb-5">

                <IconClock
                  size={32}
                  stroke={1.7}
                  className="text-[#C2B8FF]"
                />

              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Convenient
              </h3>

              <p className="text-[#D5DFFF] leading-7">
                Manage your appointments and find doctors without
                unnecessary steps.
              </p>

            </div>

            {/* User Friendly */}
            <div className="text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#303965] to-[#463C6B] border border-[#6A749B] shadow-lg">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#4A557F] flex items-center justify-center mb-5">

                <IconUserCheck
                  size={32}
                  stroke={1.7}
                  className="text-[#C9C0FF]"
                />

              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                User Friendly
              </h3>

              <p className="text-[#D5DFFF] leading-7">
                A clean and easy experience for finding doctors and
                managing your healthcare appointments.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-16 sm:py-24 overflow-hidden">

        <img
          src="https://i.pinimg.com/736x/d5/4d/f6/d54df680950dbd7614035bf94374aaff.jpg"
          alt="Carely"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#111936]/90 via-[#252E59]/65 to-[#342E5A]/90"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center">

          <div className="bg-gradient-to-br from-[#202A52]/95 via-[#303A67]/95 to-[#403866]/95 backdrop-blur-md rounded-[32px] p-7 sm:p-10 md:p-14 shadow-xl border border-[#64709A]">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Take Care of Your Health
            </h2>

            <p className="mt-5 text-[#D5DFFF] text-base sm:text-lg max-w-2xl mx-auto leading-8">
              Start your healthcare journey with Carely today.
              Find a doctor and book your appointment with ease.
            </p>

            <Link
              to="/booking"
              className="inline-block mt-8 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#46537E] to-[#6572A0] text-white font-medium shadow-md hover:from-[#596795] hover:to-[#7482B0] transition"
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