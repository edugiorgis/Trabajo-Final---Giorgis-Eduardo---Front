import { create } from "zustand";

export const useUserStore = create((set) => ({
  token: null,
  isLoggedIn: false,
  userName: "",

  actions: {
    setToken: (newToken) => {
      set({ token: newToken, isLoggedIn: !!newToken });
    },
    setUserName: (newUserName) => {
      set({ userName: newUserName });
    },
    logout: () => set({ token: null, isLoggedIn: false, userName: "" }),
  },
}));
