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
        setAppointments(
          appointments.filter((appointment) => appointment.id !== id)
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
        setAppointments(
          appointments.map((appointment) =>
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
      <p className="p-10 text-center text-[#184E6C]">
        Loading appointments...
      </p>
    );
  }

  if (error) {
    return (
      <p className="p-10 text-center text-red-500">
        {error}
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-[#184E6C] text-center">
          My Appointments
        </h1>

        {appointments.length === 0 ? (
          <p className="text-center mt-12 text-gray-500">
            No appointments found.
          </p>
        ) : (
          <div className="grid gap-6 mt-10">

            {appointments.map((appointment) => {

              const doctor = doctors.find(
                (doctor) => String(doctor.id) === String(appointment.doctorId)
              );

              return (
                <div
                  key={appointment.id}
                  className="bg-white rounded-3xl border border-[#E0F4FF] shadow-sm p-6"
                >

                  {editingId === appointment.id ? (

                    <div>

                      <h2 className="text-2xl font-bold text-[#184E6C] mb-5">
                        Edit Appointment
                      </h2>

                      {/* Patient Name */}
                      <div>
                        <label className="block text-[#184E6C] font-medium mb-2">
                          Patient Name
                        </label>

                        <input
                          type="text"
                          name="patientName"
                          value={editData.patientName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] outline-none focus:ring-2 focus:ring-[#68B0F2]"
                        />
                      </div>

                      {/* Email */}
                      <div className="mt-4">
                        <label className="block text-[#184E6C] font-medium mb-2">
                          Email
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={editData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] outline-none focus:ring-2 focus:ring-[#68B0F2]"
                        />
                      </div>

                      {/* Day */}
                      <div className="mt-4">
                        <label className="block text-[#184E6C] font-medium mb-2">
                          Select Day
                        </label>

                        <select
                          name="day"
                          value={editData.day}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] outline-none focus:ring-2 focus:ring-[#68B0F2]"
                        >
                          <option value="">
                            Select a day
                          </option>

                          {doctor?.workingDays.map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Time */}
                      <div className="mt-4">
                        <label className="block text-[#184E6C] font-medium mb-2">
                          Select Time
                        </label>

                        <select
                          name="time"
                          value={editData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] outline-none focus:ring-2 focus:ring-[#68B0F2]"
                        >
                          <option value="">
                            Select a time
                          </option>

                          {doctor?.availableSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex gap-3 mt-6">

                        <button
                          onClick={() => handleUpdate(appointment.id)}
                          className="px-5 py-2.5 rounded-xl bg-[#387EA2] text-white font-medium hover:bg-[#184E6C] transition cursor-pointer"
                        >
                          Save Changes
                        </button>

                        <button
                          onClick={() => setEditingId(null)}
                          className="px-5 py-2.5 rounded-xl bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition cursor-pointer"
                        >
                          Cancel
                        </button>

                      </div>

                    </div>

                  ) : (

                    <div>

                      <h2 className="text-2xl font-bold text-[#184E6C]">
                        {appointment.doctorName}
                      </h2>

                      <p className="text-[#387EA2] font-medium mt-1">
                        {appointment.specialty}
                      </p>

                      <div className="mt-5 grid sm:grid-cols-2 gap-3 text-gray-600">

                        <p>
                          <span className="font-medium text-[#184E6C]">
                            Patient:
                          </span>{" "}
                          {appointment.patientName}
                        </p>

                        <p>
                          <span className="font-medium text-[#184E6C]">
                            Email:
                          </span>{" "}
                          {appointment.email}
                        </p>

                        <p>
                          <span className="font-medium text-[#184E6C]">
                            Day:
                          </span>{" "}
                          {appointment.day}
                        </p>

                        <p>
                          <span className="font-medium text-[#184E6C]">
                            Time:
                          </span>{" "}
                          {appointment.time}
                        </p>

                      </div>

                      <div className="flex gap-3 mt-6">

                        <button
                          onClick={() => handleEdit(appointment)}
                          className="px-5 py-2.5 rounded-xl bg-[#68B0F2] text-white font-medium hover:bg-[#387EA2] transition cursor-pointer"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(appointment.id)}
                          className="px-5 py-2.5 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition cursor-pointer"
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