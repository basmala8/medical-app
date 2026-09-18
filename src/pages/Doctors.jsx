import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../services/api";
import useAppointmentStore from "../store/appointmentStore";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();
  const specialty = searchParams.get("specialty");

  const favorites = useAppointmentStore((state) => state.favorites);
  const toggleFavorite = useAppointmentStore(
    (state) => state.toggleFavorite
  );

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

  const getToday = () => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-gradient-to-br dark:from-[#111936] dark:via-[#202A52] dark:to-[#342B58]">
        <p className="text-center text-[#184E6C] dark:text-white">
          Loading doctors...
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

      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <h1 className="text-3xl sm:text-4xl font-bold text-[#184E6C] dark:text-white text-center">
          Our Doctors
        </h1>

        {specialty && (
          <p className="text-center mt-3 text-[#387EA2] dark:text-[#8DD3FF] text-sm sm:text-base">
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
            className="w-full px-4 sm:px-5 py-3 rounded-xl border border-[#9BCBE5] dark:border-[#59638D] outline-none focus:ring-2 focus:ring-[#5BA3C6] bg-white dark:bg-gradient-to-r dark:from-[#182142] dark:to-[#2D315A] text-[#184E6C] dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400"
          />
        </div>

        {/* Empty State */}
        {filteredDoctors.length === 0 ? (
          <p className="text-center mt-10 sm:mt-12 text-[#184E6C] dark:text-white">
            No doctors found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-8 sm:mt-10">

            {filteredDoctors.map((doctor) => {

              const isFavorite = favorites.some(
                (favorite) =>
                  String(favorite.id) === String(doctor.id)
              );

              const today = getToday();

              const isAvailableToday =
                doctor.workingDays?.includes(today);

              return (
                <div
                  key={doctor.id}
                  className="bg-white dark:bg-gradient-to-br dark:from-[#202A52] dark:via-[#2D3566] dark:to-[#3B315E] rounded-3xl overflow-hidden shadow-sm dark:shadow-black/30 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="relative">

                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-60 sm:h-64 object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => toggleFavorite(doctor)}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white dark:bg-[#182142]/90 shadow-md flex items-center justify-center text-2xl cursor-pointer hover:scale-110 transition"
                      aria-label={
                        isFavorite
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                    >
                      {isFavorite ? "❤️" : "🤍"}
                    </button>

                  </div>

                  <div className="p-5">

                    <div className="flex items-center justify-between gap-2">

                      <h2 className="text-lg sm:text-xl font-bold text-[#184E6C] dark:text-white">
                        {doctor.name}
                      </h2>

                      <span
                        className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
                          isAvailableToday
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-500 dark:bg-[#454B70] dark:text-gray-300"
                        }`}
                      >
                        {isAvailableToday
                          ? "Available Today"
                          : "Not Available"}
                      </span>

                    </div>

                    <p className="mt-2 text-[#387EA2] dark:text-[#9EDCFF] font-medium">
                      {doctor.specialty}
                    </p>

                    <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-6">
                      {doctor.description}
                    </p>

                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="block text-center mt-5 bg-[#387EA2] dark:bg-gradient-to-r dark:from-[#4D9ED0] dark:to-[#8068B5] text-white py-3 rounded-xl hover:bg-[#184E6C] dark:hover:from-[#68B0F2] dark:hover:to-[#9A82D0] transition"
                    >
                      View Details
                    </Link>

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>
    </div>
  );
}

export default Doctors;