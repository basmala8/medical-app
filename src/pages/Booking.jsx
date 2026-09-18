import { useEffect, useState } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";

import { Controller, useForm } from "react-hook-form";

import toast from "react-hot-toast";

import api from "../services/api";

import useAppointmentStore from "../store/appointmentStore";

function Booking() {

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const doctorId = searchParams.get("doctorId");

  // Zustand
  const selectedDoctor = useAppointmentStore(
    (state) => state.selectedDoctor
  );

  const initialDoctor =
    selectedDoctor &&
    String(selectedDoctor.id) === String(doctorId)
      ? selectedDoctor
      : null;

  const [doctor, setDoctor] = useState(initialDoctor);

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const loading = Boolean(doctorId) && !doctor && !error;

  useEffect(() => {

    if (!doctorId || doctor) {
      return;
    }

    api
      .get(`/doctors/${doctorId}`)
      .then((response) => {
        setDoctor(response.data);
      })
      .catch(() => {
        setError("Failed to load doctor information.");
        toast.error("Failed to load doctor information.");
      });

  }, [doctorId, doctor]);

  const onSubmit = (data) => {

    setError("");

    const appointment = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      patientName: data.patientName,
      email: data.email,
      day: data.day,
      time: data.time,
      status: "Pending",
    };

    api
      .post("/appointments", appointment)
      .then(() => {
        toast.success("Appointment booked successfully!");
        navigate("/appointments");
      })
      .catch(() => {
        setError("Failed to book appointment. Please try again.");
        toast.error("Failed to book appointment. Please try again.");
      });

  };

  // No doctor selected
  if (!doctorId) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-gradient-to-br dark:from-[#111936] dark:via-[#202A52] dark:to-[#342B58]">

        <p className="text-red-500 text-center">
          No doctor was selected.
        </p>

      </div>
    );
  }

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-gradient-to-br dark:from-[#111936] dark:via-[#202A52] dark:to-[#342B58]">

        <p className="text-[#184E6C] dark:text-white text-lg font-medium text-center">
          Loading doctor...
        </p>

      </div>
    );
  }

  // Error
  if (error && !doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-gradient-to-br dark:from-[#111936] dark:via-[#202A52] dark:to-[#342B58]">

        <p className="text-red-500 text-center">
          {error}
        </p>

      </div>
    );
  }

  // Doctor not found
  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-gradient-to-br dark:from-[#111936] dark:via-[#202A52] dark:to-[#342B58]">

        <p className="text-gray-500 dark:text-gray-300 text-center">
          Doctor not found.
        </p>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#111936] dark:via-[#202A52] dark:to-[#342B58] py-10 sm:py-12 transition-colors duration-300">

      <div className="max-w-2xl mx-auto px-5 sm:px-6">

        <h1 className="text-3xl sm:text-4xl font-bold text-[#184E6C] dark:text-white text-center">
          Book an Appointment
        </h1>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-3 text-sm sm:text-base">
          Fill in your information to book your appointment.
        </p>

        {/* Error */}
        {error && doctor && (
          <div className="mt-5 sm:mt-6 p-4 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 text-center text-sm sm:text-base">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 sm:mt-10 bg-white dark:bg-gradient-to-br dark:from-[#202A52] dark:via-[#2D3566] dark:to-[#3B315E] rounded-3xl shadow-md dark:shadow-black/30 border border-[#E0F4FF] dark:border-[#59638D] p-5 sm:p-8 transition-colors duration-300"
        >

          {/* Doctor Information */}
          <div className="mb-6 sm:mb-7">

            <p className="text-sm text-[#68B0F2] dark:text-[#8DD3FF] font-medium">
              Doctor
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#184E6C] dark:text-white mt-1 break-words">
              {doctor.name}
            </h2>

            <p className="text-[#387EA2] dark:text-[#9EDCFF] mt-1">
              {doctor.specialty}
            </p>

          </div>

          {/* Patient Name - Uncontrolled Input */}
          <div>

            <label className="block text-[#184E6C] dark:text-white font-medium mb-2">
              Patient Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              {...register("patientName", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] dark:border-[#59638D] outline-none focus:ring-2 focus:ring-[#68B0F2] bg-white dark:bg-gradient-to-r dark:from-[#182142] dark:to-[#2D315A] text-[#184E6C] dark:text-white placeholder:text-gray-400"
            />

            {errors.patientName && (
              <p className="text-red-500 dark:text-red-300 text-sm mt-2">
                {errors.patientName.message}
              </p>
            )}

          </div>

          {/* Email - Controlled Input */}
          <div className="mt-5">

            <label className="block text-[#184E6C] dark:text-white font-medium mb-2">
              Email
            </label>

            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              }}
              render={({ field }) => (
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={field.value || ""}
                  onChange={field.onChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] dark:border-[#59638D] outline-none focus:ring-2 focus:ring-[#68B0F2] bg-white dark:bg-gradient-to-r dark:from-[#182142] dark:to-[#2D315A] text-[#184E6C] dark:text-white placeholder:text-gray-400"
                />
              )}
            />

            {errors.email && (
              <p className="text-red-500 dark:text-red-300 text-sm mt-2">
                {errors.email.message}
              </p>
            )}

          </div>

          {/* Day */}
          <div className="mt-5">

            <label className="block text-[#184E6C] dark:text-white font-medium mb-2">
              Select Day
            </label>

            <select
              {...register("day", {
                required: "Please select a day",
              })}
              className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] dark:border-[#59638D] outline-none focus:ring-2 focus:ring-[#68B0F2] bg-white dark:bg-gradient-to-r dark:from-[#182142] dark:to-[#2D315A] text-[#184E6C] dark:text-white"
            >

              <option value="">
                Select a day
              </option>

              {doctor.workingDays?.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}

            </select>

            {errors.day && (
              <p className="text-red-500 dark:text-red-300 text-sm mt-2">
                {errors.day.message}
              </p>
            )}

          </div>

          {/* Time */}
          <div className="mt-5">

            <label className="block text-[#184E6C] dark:text-white font-medium mb-2">
              Select Time
            </label>

            <select
              {...register("time", {
                required: "Please select a time",
              })}
              className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] dark:border-[#59638D] outline-none focus:ring-2 focus:ring-[#68B0F2] bg-white dark:bg-gradient-to-r dark:from-[#182142] dark:to-[#2D315A] text-[#184E6C] dark:text-white"
            >

              <option value="">
                Select a time
              </option>

              {doctor.availableSlots?.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}

            </select>

            {errors.time && (
              <p className="text-red-500 dark:text-red-300 text-sm mt-2">
                {errors.time.message}
              </p>
            )}

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-7 sm:mt-8 py-3 rounded-xl bg-[#387EA2] dark:bg-gradient-to-r dark:from-[#4D9ED0] dark:to-[#8068B5] text-white font-medium hover:bg-[#184E6C] dark:hover:from-[#68B0F2] dark:hover:to-[#9A82D0] transition-all duration-200 cursor-pointer"
          >
            Book Appointment
          </button>

        </form>

      </div>

    </div>
  );
}

export default Booking;