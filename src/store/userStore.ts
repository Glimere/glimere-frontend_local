import { create } from "zustand";
import { setJwt, getJwt, removeJwt } from "@/lib/cookie";
import type { UserData } from "@/types";
import { ApiResponse } from "@/types";

type UserStore = {
  user: UserData | null;
  authToken: string | null;
  isAuthenticated: boolean;
  setAuthToken: (token: string) => void;
  setUser: (user: UserData) => void;
  logout: () => void;
  fetchUser: () => Promise<void>;
  initialize: () => Promise<void>;
};

const useUserStore = create<UserStore>((set) => ({
  user: null,
  authToken: null,
  isAuthenticated: false,

  setAuthToken: (token) => {
    setJwt(token); // Store token in cookies on login
    set({ authToken: token, isAuthenticated: true });
  },

  setUser: (user) => set({ user }),

  logout: () => {
    removeJwt(); // Remove token from cookies
    set({ user: null, authToken: null, isAuthenticated: false });
  },

  fetchUser: async () => {
    const token = await getJwt(); // Get the token from cookies
    if (!token) return; // If no token, stop

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const responseData: ApiResponse = await response.json(); // Expecting response in UserApi format
        const user: UserData = responseData.data; // Extract UserData from the UserApi response
        set({ user, authToken: token, isAuthenticated: true });
      } else if (response.status === 401) {
        const errorData = await response.json();
        if (errorData.message === "Invalid token.") {
          useUserStore.getState().logout(); // Logout user if token is invalid
        }
      } else {
        console.error("Unexpected response:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
      useUserStore.getState().logout(); // Logout on error
    }
  },

  initialize: async () => {
    const token = await getJwt(); // Check if JWT exists in cookies
    if (token) {
      await useUserStore.getState().fetchUser(); // Fetch user if token exists
    }
  },
}));

export default useUserStore;
