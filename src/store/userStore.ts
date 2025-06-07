import { getJwt, removeJwt, setJwt } from "@/lib/cookie";
import { ApiResponse, type UserData } from "@/types";
import { create } from "zustand";





type UserStore = {
  user: UserData | null;
  authToken: string | null;
  isAuthenticated: boolean;
  setAuthToken: (token: string) => void;
  setUser: (user: UserData) => void;
  logout: () => void;
  fetchUser: (directToken?: string) => Promise<void>;
  initialize: () => Promise<void>;
};

const useUserStore = create<UserStore>((set) => ({
  user: null,
  authToken: null,
  isAuthenticated: false,

  setAuthToken: (token) => {
    setJwt(token); // Store token in cookies
    set({ authToken: token, isAuthenticated: true });
  },

  setUser: (user) => set({ user }),

  logout: () => {
    removeJwt(); // Clear JWT from cookies
    set({ user: null, authToken: null, isAuthenticated: false });
  },

  fetchUser: async (directToken) => {
    const token = await getJwt() || directToken; 
    if (!token) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const { data: user }: ApiResponse = await response.json();
        set({ user, authToken: token, isAuthenticated: true });
      } else if (response.status === 401) {
        useUserStore.getState().logout();
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      useUserStore.getState().logout();
    }
  },

  initialize: async () => {
    const token = await getJwt(); // Check for existing JWT
    if (token) {
      await useUserStore.getState().fetchUser(); // Fetch user data if JWT is valid
    }
  },
}));

export default useUserStore;