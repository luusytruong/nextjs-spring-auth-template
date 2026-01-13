import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
  validateStatus: (status) => status >= 200 && status < 600,
});

api.interceptors.request.use(async (config) => {
  if (typeof window === "undefined") {
    try {
      const { cookies } = await import("next/headers");
      const cookieStore = await cookies();
      const cookieStr = cookieStore.toString();
      // console.log("[AXIOS]", cookieStr);
      if (cookieStr) config.headers.Cookie = cookieStr;
    } catch (error) {
      console.error(error);
    }
  }

  return config;
});

export default api;
