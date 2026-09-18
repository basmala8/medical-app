import { create } from "zustand";

const useAppointmentStore = create((set) => ({
  selectedDoctor: null,

  setSelectedDoctor: (doctor) => {
    set({ selectedDoctor: doctor });
  },

  clearSelectedDoctor: () => {
    set({ selectedDoctor: null });
  },
}));

export default useAppointmentStore;