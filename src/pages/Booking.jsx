import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../services/api";

function Booking() {
  const [searchParams] = useSearchParams();
  const doctorId = searchParams.get("doctorId");

  const [doctor, setDoctor] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    api
      .get(`/doctors/${doctorId}`)
      .then((response) => {
        setDoctor(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [doctorId]);

  const onSubmit = (data) => {
    const appointment = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      patientName: data.patientName,
      email: data.email,
      day: data.day,
      time: data.time,
    };

    api
      .post("/appointments", appointment)
      .then(() => {
        alert("Appointment booked successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to book appointment.");
      });
  };

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#184E6C]">
          Loading doctor...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-2xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-[#184E6C] text-center">
          Book an Appointment
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Fill in your information to book your appointment.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 bg-white rounded-3xl shadow-md border border-[#E0F4FF] p-8"
        >

          {/* Doctor Information */}
          <div className="mb-7">
            <p className="text-sm text-[#68B0F2] font-medium">
              Doctor
            </p>

            <h2 className="text-2xl font-bold text-[#184E6C] mt-1">
              {doctor.name}
            </h2>

            <p className="text-[#387EA2] mt-1">
              {doctor.specialty}
            </p>
          </div>

          {/* Patient Name */}
          <div>
            <label className="block text-[#184E6C] font-medium mb-2">
              Patient Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              {...register("patientName", {
                required: "Name is required",
              })}
              className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] outline-none focus:ring-2 focus:ring-[#68B0F2]"
            />

            {errors.patientName && (
              <p className="text-red-500 text-sm mt-2">
                {errors.patientName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mt-5">
            <label className="block text-[#184E6C] font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] outline-none focus:ring-2 focus:ring-[#68B0F2]"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Day */}
          <div className="mt-5">
            <label className="block text-[#184E6C] font-medium mb-2">
              Select Day
            </label>

            <select
              {...register("day", {
                required: "Please select a day",
              })}
              className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] outline-none focus:ring-2 focus:ring-[#68B0F2]"
            >
              <option value="">
                Select a day
              </option>

              {doctor.workingDays.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>

            {errors.day && (
              <p className="text-red-500 text-sm mt-2">
                {errors.day.message}
              </p>
            )}
          </div>

          {/* Time */}
          <div className="mt-5">
            <label className="block text-[#184E6C] font-medium mb-2">
              Select Time
            </label>

            <select
              {...register("time", {
                required: "Please select a time",
              })}
              className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] outline-none focus:ring-2 focus:ring-[#68B0F2]"
            >
              <option value="">
                Select a time
              </option>

              {doctor.availableSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            {errors.time && (
              <p className="text-red-500 text-sm mt-2">
                {errors.time.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-8 py-3 rounded-xl bg-[#387EA2] text-white font-medium hover:bg-[#184E6C] transition cursor-pointer"
          >
            Book Appointment
          </button>

        </form>
      </div>
    </div>
  );
}

export default Booking;