import { useEffect, useState } from "react";
import api from "../services/api";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    patientName: "",
    email: "",
    day: "",
    time: "",
  });

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api
      .get("/appointments")
      .then((response) => {
        setAppointments(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load appointments.");
        setLoading(false);
      });

    api
      .get("/doctors")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch(() => {
        console.log("Failed to load doctors.");
      });
  }, []);

  // Delete
  const handleDelete = (id) => {
    api
      .delete(`/appointments/${id}`)
      .then(() => {
        setAppointments((currentAppointments) =>
          currentAppointments.filter(
            (appointment) => appointment.id !== id
          )
        );
      })
      .catch(() => {
        alert("Failed to delete appointment.");
      });
  };

  // Start Edit
  const handleEdit = (appointment) => {
    setEditingId(appointment.id);

    setEditData({
      patientName: appointment.patientName,
      email: appointment.email,
      day: appointment.day,
      time: appointment.time,
    });
  };

  // Handle inputs
  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  // Update
  const handleUpdate = (id) => {
    const appointment = appointments.find(
      (appointment) => appointment.id === id
    );

    const updatedAppointment = {
      ...appointment,
      patientName: editData.patientName,
      email: editData.email,
      day: editData.day,
      time: editData.time,
    };

    api
      .put(`/appointments/${id}`, updatedAppointment)
      .then((response) => {
        setAppointments((currentAppointments) =>
          currentAppointments.map((appointment) =>
            appointment.id === id ? response.data : appointment
          )
        );

        setEditingId(null);
      })
      .catch(() => {
        alert("Failed to update appointment.");
      });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-gradient-to-br dark:from-[#111936] dark:via-[#202A52] dark:to-[#342B58]">
        <p className="text-center text-[#184E6C] dark:text-white">
          Loading appointments...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-gradient-to-br dark:from-[#111936] dark:via-[#202A52] dark:to-[#342B58]">
        <p className="text-center text-red-500">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#111936] dark:via-[#202A52] dark:to-[#342B58] py-10 sm:py-12 transition-colors duration-300">

      <div className="max-w-5xl mx-auto px-5 sm:px-6">

        <h1 className="text-3xl sm:text-4xl font-bold text-[#184E6C] dark:text-white text-center">
          My Appointments
        </h1>

        {appointments.length === 0 ? (

          <p className="text-center mt-10 sm:mt-12 text-gray-500 dark:text-gray-300">
            No appointments found.
          </p>

        ) : (

          <div className="grid gap-5 sm:gap-6 mt-8 sm:mt-10">

            {appointments.map((appointment) => {

              const doctor = doctors.find(
                (doctor) =>
                  String(doctor.id) === String(appointment.doctorId)
              );

              const status = appointment.status || "Pending";

              return (
                <div
                  key={appointment.id}
                  className="bg-white dark:bg-gradient-to-br dark:from-[#202A52] dark:via-[#2D3566] dark:to-[#3B315E] rounded-3xl border border-[#E0F4FF] dark:border-[#59638D] shadow-sm dark:shadow-black/30 p-5 sm:p-6 transition-colors duration-300"
                >

                  {editingId === appointment.id ? (

                    <div>

                      <h2 className="text-xl sm:text-2xl font-bold text-[#184E6C] dark:text-white mb-5">
                        Edit Appointment
                      </h2>

                      {/* Patient Name */}
                      <div>

                        <label className="block text-[#184E6C] dark:text-white font-medium mb-2">
                          Patient Name
                        </label>

                        <input
                          type="text"
                          name="patientName"
                          value={editData.patientName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] dark:border-[#59638D] outline-none focus:ring-2 focus:ring-[#68B0F2] bg-white dark:bg-gradient-to-r dark:from-[#182142] dark:to-[#2D315A] text-[#184E6C] dark:text-white"
                        />

                      </div>

                      {/* Email */}
                      <div className="mt-4">

                        <label className="block text-[#184E6C] dark:text-white font-medium mb-2">
                          Email
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={editData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] dark:border-[#59638D] outline-none focus:ring-2 focus:ring-[#68B0F2] bg-white dark:bg-gradient-to-r dark:from-[#182142] dark:to-[#2D315A] text-[#184E6C] dark:text-white"
                        />

                      </div>

                      {/* Day */}
                      <div className="mt-4">

                        <label className="block text-[#184E6C] dark:text-white font-medium mb-2">
                          Select Day
                        </label>

                        <select
                          name="day"
                          value={editData.day}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] dark:border-[#59638D] outline-none focus:ring-2 focus:ring-[#68B0F2] bg-white dark:bg-gradient-to-r dark:from-[#182142] dark:to-[#2D315A] text-[#184E6C] dark:text-white"
                        >

                          <option value="">
                            Select a day
                          </option>

                          {doctor?.workingDays?.map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                          ))}

                        </select>

                      </div>

                      {/* Time */}
                      <div className="mt-4">

                        <label className="block text-[#184E6C] dark:text-white font-medium mb-2">
                          Select Time
                        </label>

                        <select
                          name="time"
                          value={editData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] dark:border-[#59638D] outline-none focus:ring-2 focus:ring-[#68B0F2] bg-white dark:bg-gradient-to-r dark:from-[#182142] dark:to-[#2D315A] text-[#184E6C] dark:text-white"
                        >

                          <option value="">
                            Select a time
                          </option>

                          {doctor?.availableSlots?.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}

                        </select>

                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 mt-6">

                        <button
                          onClick={() => handleUpdate(appointment.id)}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#387EA2] dark:bg-gradient-to-r dark:from-[#4D9ED0] dark:to-[#8068B5] text-white font-medium hover:bg-[#184E6C] dark:hover:from-[#68B0F2] dark:hover:to-[#9A82D0] transition-all duration-200 cursor-pointer"
                        >
                          Save Changes
                        </button>

                        <button
                          onClick={() => setEditingId(null)}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gray-200 dark:bg-[#454B70] text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-[#59638D] transition cursor-pointer"
                        >
                          Cancel
                        </button>

                      </div>

                    </div>

                  ) : (

                    <div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                        <div>

                          <h2 className="text-xl sm:text-2xl font-bold text-[#184E6C] dark:text-white break-words">
                            {appointment.doctorName}
                          </h2>

                          <p className="text-[#387EA2] dark:text-[#9EDCFF] font-medium mt-1">
                            {appointment.specialty}
                          </p>

                        </div>

                        {/* Appointment Status */}
                        <span
                          className={`self-start sm:self-auto px-3 py-1.5 rounded-full text-sm font-medium ${
                            status === "Pending"
                              ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300"
                              : status === "Confirmed"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                              : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                          }`}
                        >
                          {status}
                        </span>

                      </div>

                      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 dark:text-gray-300">

                        <p className="break-words">

                          <span className="font-medium text-[#184E6C] dark:text-white">
                            Patient:
                          </span>{" "}

                          {appointment.patientName}

                        </p>

                        <p className="break-all">

                          <span className="font-medium text-[#184E6C] dark:text-white">
                            Email:
                          </span>{" "}

                          {appointment.email}

                        </p>

                        <p>

                          <span className="font-medium text-[#184E6C] dark:text-white">
                            Day:
                          </span>{" "}

                          {appointment.day}

                        </p>

                        <p>

                          <span className="font-medium text-[#184E6C] dark:text-white">
                            Time:
                          </span>{" "}

                          {appointment.time}

                        </p>

                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 mt-6">

                        <button
                          onClick={() => handleEdit(appointment)}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#68B0F2] dark:bg-gradient-to-r dark:from-[#4D9ED0] dark:to-[#8068B5] text-white font-medium hover:bg-[#387EA2] dark:hover:from-[#68B0F2] dark:hover:to-[#9A82D0] transition-all duration-200 cursor-pointer"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(appointment.id)}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition cursor-pointer"
                        >
                          Delete
                        </button>

                      </div>

                    </div>

                  )}

                </div>
              );
            })}

          </div>

        )}

      </div>

    </div>
  );
}

export default Appointments;