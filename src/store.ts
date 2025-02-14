import { create } from "zustand";
import { AttendeeDetailsFormData } from "./Schema";

interface AttendeeDetailsStore {
  formData: AttendeeDetailsFormData;
  setFormData: (data: AttendeeDetailsFormData) => void;
}

export const useAttendeeDetailsStore = create<AttendeeDetailsStore>((set) => ({
  formData: {
    profilePhotoUrl: "",
    name: "",
    email: "",
    specialRequest: "",
  },
  setFormData: (data) => set({ formData: data }),
}));
