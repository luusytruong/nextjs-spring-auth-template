import type { FullUser, LoginRequest, RegisterRequest } from "@/types";
import { handleApiResponse } from "@/utils/response";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { userApi } from "@/lib/axios/auth.api";

interface UserStore {
  user: FullUser | null;
  isLoading: boolean;

  setUser: (user: FullUser) => void;
  clearUser: () => void;

  register: (u: RegisterRequest, callback?: () => void) => Promise<void>;
  login: (u: LoginRequest, callback?: () => void) => Promise<void>;
  logout: (callback?: () => void) => Promise<void>;
  profile: () => Promise<void>;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),

      register: async (u, callback) => {
        set({ isLoading: true });
        await handleApiResponse(userApi.register(u), {
          onSuccess: async () => {
            // await get().profile();
            callback?.();
          },
        });
        set({ isLoading: false });
      },

      login: async (u, callback) => {
        set({ isLoading: true });
        await handleApiResponse(userApi.login(u), {
          onSuccess: async () => {
            // await get().profile();
            callback?.();
          },
        });
        set({ isLoading: false });
      },

      logout: async (callback) => {
        set({ isLoading: true });
        await handleApiResponse(userApi.logout(), {
          onSuccess: () => {
            get().clearUser();
            callback?.();
          },
        });
        set({ isLoading: false });
      },

      profile: async () => {
        set({ isLoading: true });
        await handleApiResponse(userApi.me(), {
          showSuccessToast: false,
          onSuccess: (res) => {
            if (res.data) {
              set({ user: res.data });
            }
          },
        });
        set({ isLoading: false });
      },
    }),
    { name: "user" }
  )
);
