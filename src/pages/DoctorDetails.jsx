import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";
import useAppointmentStore from "../store/appointmentStore";

function DoctorDetails() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const setSelectedDoctor = useAppointmentStore(
    (state) => state.setSelectedDoctor
  );

  useEffect(() => {
    api
      .get(`/doctors/${id}`)
      .then((response) => {
        setDoctor(response.data);
        setSelectedDoctor(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load doctor details.");
        setLoading(false);
      });
  }, [id, setSelectedDoctor]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <p className="text-center text-[#184E6C]">
          Loading doctor...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <p className="text-center text-red-500">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-10 sm:py-12">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">

          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-[350px] sm:h-[400px] md:h-[450px] object-cover rounded-3xl shadow-md"
          />

          <div>
            <p className="text-[#68B0F2] font-semibold">
              {doctor.specialty}
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#184E6C] mt-2">
              {doctor.name}
            </h1>

            <p className="mt-4 sm:mt-5 text-gray-600 leading-7 sm:leading-8">
              {doctor.description}
            </p>

            <div className="mt-6 sm:mt-7">
              <h2 className="text-lg sm:text-xl font-bold text-[#184E6C]">
                Working Days
              </h2>

              <div className="flex flex-wrap gap-2 mt-3">
                {doctor.workingDays.map((day) => (
                  <span
                    key={day}
                    className="px-3 sm:px-4 py-2 rounded-xl bg-[#E0F4FF] text-[#387EA2] font-medium text-sm sm:text-base"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-7">
              <h2 className="text-lg sm:text-xl font-bold text-[#184E6C]">
                Available Slots
              </h2>

              <div className="flex flex-wrap gap-2 mt-3">
                {doctor.availableSlots.map((slot) => (
                  <span
                    key={slot}
                    className="px-3 sm:px-4 py-2 rounded-xl bg-[#F3EEFC] text-[#184E6C] font-medium text-sm sm:text-base"
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to={`/booking?doctorId=${doctor.id}`}
              className="inline-block w-full sm:w-auto text-center mt-7 sm:mt-8 px-6 py-3 rounded-xl bg-[#387EA2] text-white font-medium hover:bg-[#184E6C] transition"
            >
              Book Appointment
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;