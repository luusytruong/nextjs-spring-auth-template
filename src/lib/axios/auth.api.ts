import type {
  ApiResponse,
  FullUser,
  LoginRequest,
  RegisterRequest,
} from "@/components/ui/types";
import api from "./api";

export const userApi = {
  login: async (request: LoginRequest): Promise<ApiResponse<void>> => {
    const response = await api.post("/auth/login", request);
    return response.data;
  },

  register: async (request: RegisterRequest): Promise<ApiResponse<void>> => {
    const response = await api.post("/auth/register", request);
    return response.data;
  },

  logout: async (): Promise<ApiResponse<void>> => {
    const response = await api.post("/auth/logout");
    return response.data;
  },

  refresh: async (): Promise<ApiResponse<void>> => {
    const response = await api.post("/auth/refresh");
    return response.data;
  },

  me: async (): Promise<ApiResponse<FullUser>> => {
    const response = await api.get("/auth/me");
    return response.data;
  },
};
