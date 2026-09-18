import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../services/api";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();
  const specialty = searchParams.get("specialty");

  useEffect(() => {
    api
      .get("/doctors")
      .then((response) => {
        setDoctors(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load doctors.");
        setLoading(false);
      });
  }, []);

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSpecialty =
      !specialty || doctor.specialty === specialty;

    return matchesSearch && matchesSpecialty;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <p className="text-center text-[#184E6C]">
          Loading doctors...
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

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <h1 className="text-3xl sm:text-4xl font-bold text-[#184E6C] text-center">
          Our Doctors
        </h1>

        {specialty && (
          <p className="text-center mt-3 text-[#387EA2] text-sm sm:text-base">
            Specialty: {specialty}
          </p>
        )}

        {/* Search */}
        <div className="max-w-xl mx-auto mt-6 sm:mt-8">
          <input
            type="text"
            placeholder="Search by doctor name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 sm:px-5 py-3 rounded-xl border border-[#9BCBE5] outline-none focus:ring-2 focus:ring-[#5BA3C6] bg-white"
          />
        </div>

        {/* Empty State */}
        {filteredDoctors.length === 0 ? (
          <p className="text-center mt-10 sm:mt-12 text-[#184E6C]">
            No doctors found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-8 sm:mt-10">

            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-60 sm:h-64 object-cover"
                />

                <div className="p-5">

                  <h2 className="text-lg sm:text-xl font-bold text-[#184E6C]">
                    {doctor.name}
                  </h2>

                  <p className="mt-2 text-[#387EA2] font-medium">
                    {doctor.specialty}
                  </p>

                  <p className="mt-3 text-gray-600 text-sm leading-6">
                    {doctor.description}
                  </p>

                  <Link
                    to={`/doctors/${doctor.id}`}
                    className="block text-center mt-5 bg-[#387EA2] text-white py-3 rounded-xl hover:bg-[#184E6C] transition"
                  >
                    View Details
                  </Link>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}

export default Doctors;