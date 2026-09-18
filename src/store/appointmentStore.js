import { create } from "zustand";

const useAppointmentStore = create((set) => ({

  selectedDoctor: null,

  setSelectedDoctor: (doctor) => {
    set({ selectedDoctor: doctor });
  },

  clearSelectedDoctor: () => {
    set({ selectedDoctor: null });
  },

  favorites: [],

  toggleFavorite: (doctor) => {
    set((state) => {
      const isFavorite = state.favorites.some(
        (favorite) => String(favorite.id) === String(doctor.id)
      );

      if (isFavorite) {
        return {
          favorites: state.favorites.filter(
            (favorite) =>
              String(favorite.id) !== String(doctor.id)
          ),
        };
      }

      return {
        favorites: [...state.favorites, doctor],
      };
    });
  },

}));

export default useAppointmentStore;