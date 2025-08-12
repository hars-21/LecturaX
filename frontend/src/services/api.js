import axios from "axios";
import { toast } from "react-toastify";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh and errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 errors (token expired)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          const response = await api.post("/refresh", {
            refreshToken,
          });

          const { accessToken } = response.data.tokens;
          localStorage.setItem("accessToken", accessToken);

          // Retry the original request with new token
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, redirect to login
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        window.location.href = "/signin";
        return Promise.reject(refreshError);
      }
    }

    // Handle other errors
    const errorMessage = error.response?.data?.message || error.message || "An error occurred";

    // Don't show toast for auth check requests
    if (!originalRequest.url?.includes("/profile")) {
      toast.error(errorMessage);
    }

    return Promise.reject(error);
  }
);

// Auth API functions
export const authAPI = {
  // Sign up
  signup: async (userData) => {
    const response = await api.post("/signup", userData);
    return response.data;
  },

  // Sign in
  signin: async (credentials) => {
    const response = await api.post("/signin", credentials);
    return response.data;
  },

  // Refresh token
  refreshToken: async (refreshToken) => {
    const response = await api.post("/refresh", { refreshToken });
    return response.data;
  },

  // Get current user profile
  getProfile: async () => {
    const response = await api.get("/profile");
    return response.data;
  },

  // Update profile
  updateProfile: async (profileData) => {
    const response = await api.put("/profile", profileData);
    return response.data;
  },

  // Check auth status
  checkAuthStatus: async () => {
    const response = await api.get("/");
    return response.data;
  },
};

// Generic API functions
export const apiRequest = {
  get: async (url, config = {}) => {
    const response = await api.get(url, config);
    return response.data;
  },

  post: async (url, data, config = {}) => {
    const response = await api.post(url, data, config);
    return response.data;
  },

  put: async (url, data, config = {}) => {
    const response = await api.put(url, data, config);
    return response.data;
  },

  delete: async (url, config = {}) => {
    const response = await api.delete(url, config);
    return response.data;
  },
};

export default api;
