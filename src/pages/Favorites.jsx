import { Link } from "react-router-dom";

import useAppointmentStore from "../store/appointmentStore";

function Favorites() {

  const favorites = useAppointmentStore(
    (state) => state.favorites
  );

  const toggleFavorite = useAppointmentStore(
    (state) => state.toggleFavorite
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#111936] dark:via-[#202A52] dark:to-[#342B58] py-10 sm:py-12 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <h1 className="text-3xl sm:text-4xl font-bold text-[#184E6C] dark:text-white text-center">
          Favorite Doctors
        </h1>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-3">
          Doctors you saved as favorites.
        </p>

        {favorites.length === 0 ? (

          <div className="mt-10 text-center">

            <p className="text-gray-500 dark:text-gray-300 text-lg">
              You haven't added any doctors to favorites yet.
            </p>

            <Link
              to="/doctors"
              className="inline-block mt-5 px-6 py-3 rounded-xl bg-[#387EA2] dark:bg-gradient-to-r dark:from-[#4D9ED0] dark:to-[#8068B5] text-white font-medium hover:bg-[#184E6C] dark:hover:from-[#68B0F2] dark:hover:to-[#9A82D0] transition-all duration-200"
            >
              Browse Doctors
            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            {favorites.map((doctor) => (

              <div
                key={doctor.id}
                className="bg-white dark:bg-gradient-to-br dark:from-[#202A52] dark:via-[#2D3566] dark:to-[#3B315E] rounded-3xl shadow-md dark:shadow-black/30 border border-[#E0F4FF] dark:border-[#59638D] overflow-hidden transition-colors duration-300"
              >

                <div className="relative">

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-56 object-cover"
                  />

                  <button
                    type="button"
                    onClick={() => toggleFavorite(doctor)}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white dark:bg-[#182142]/90 shadow-md flex items-center justify-center text-2xl cursor-pointer hover:scale-110 transition"
                    aria-label="Remove from favorites"
                  >
                    ❤️
                  </button>

                </div>

                <div className="p-5">

                  <h2 className="text-xl font-bold text-[#184E6C] dark:text-white">
                    {doctor.name}
                  </h2>

                  <p className="text-[#387EA2] dark:text-[#9EDCFF] mt-1">
                    {doctor.specialty}
                  </p>

                  <Link
                    to={`/doctors/${doctor.id}`}
                    className="block text-center mt-5 py-3 rounded-xl bg-[#387EA2] dark:bg-gradient-to-r dark:from-[#4D9ED0] dark:to-[#8068B5] text-white font-medium hover:bg-[#184E6C] dark:hover:from-[#68B0F2] dark:hover:to-[#9A82D0] transition-all duration-200"
                  >
                    View Doctor
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

export default Favorites;