import type {
  FullUser,
  LoginRequest,
  RegisterRequest,
} from "@/components/ui/types";
import { handleApiResponse } from "@/utils/response";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { userApi } from "@/lib/axios/auth.api";
import { cookieStorage } from "@/lib/cookie";

interface UserStore {
  user: FullUser | null;

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

      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),

      register: async (u, callback) => {
        await handleApiResponse(userApi.register(u), {
          onSuccess: async () => {
            await get().profile();
            callback?.();
          },
        });
      },

      login: async (u, callback) => {
        await handleApiResponse(userApi.login(u), {
          onSuccess: async () => {
            await get().profile();
            callback?.();
          },
        });
      },

      logout: async (callback) => {
        await handleApiResponse(userApi.logout(), {
          onSuccess: () => {
            get().clearUser();
            callback?.();
          },
        });
      },

      profile: async () => {
        await handleApiResponse(userApi.me(), {
          showSuccessToast: false,
          onSuccess: (res) => {
            if (res.data) {
              set({ user: res.data });
            }
          },
        });
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => cookieStorage),
    }
  )
);
