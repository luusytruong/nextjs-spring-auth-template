import axios from "axios";
import { useUserStore } from "@/store/user.store";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
  validateStatus: (status) => status >= 200 && status < 600,
});

// const refreshApi = axios.create({
//   baseURL: "http://localhost:3000/api/v1",
//   withCredentials: true,
//   validateStatus: (status) => status >= 200 && status < 600,
// });

// let isRefreshing = false;
// let failedQueue: Array<{
//   resolve: (value: any) => void;
//   reject: (reason?: any) => void;
// }> = [];

// const processQueue = (error: any = null) => {
//   failedQueue.forEach((prom) => {
//     if (error) prom.reject(error);
//     else prom.resolve(null);
//   });
//   failedQueue = [];
// };

// api.interceptors.response.use(
//   (response) => response,

//   async (error) => {
//     const originalRequest = error.config;

//     const authEndpoints = [
//       "/api/v1/auth/login",
//       "/api/v1/auth/register",
//       "/api/v1/auth/refresh",
//       "/api/v1/auth/logout",
//     ];

//     console.log("originalRequest.url", originalRequest.url);

//     if (
//       authEndpoints.some((endpoint) => originalRequest.url?.includes(endpoint))
//     ) {
//       return Promise.reject(error);
//     }

//     if (error.response?.status !== 401 || originalRequest._retry) {
//       return Promise.reject(error);
//     }

//     originalRequest._retry = true;

//     if (isRefreshing) {
//       return new Promise((resolve, reject) => {
//         failedQueue.push({ resolve, reject });
//       })
//         .then(() => api(originalRequest))
//         .catch((err) => Promise.reject(err));
//     }

//     isRefreshing = true;

//     try {
//       await refreshApi.post("/auth/refresh");
//       processQueue();
//       return api(originalRequest);
//     } catch (refreshError) {
//       processQueue(refreshError);
//       useUserStore.getState().clearUser();
//       window.location.href = "/login";
//       return Promise.reject(refreshError);
//     } finally {
//       isRefreshing = false;
//     }
//   }
// );

export default api;
