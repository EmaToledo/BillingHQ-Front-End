import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

let logoutFunction: (() => void) | null = null;

export const setLogoutFunction = (fn: () => void) => {
  logoutFunction = fn;
};

api.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        console.warn('Token inválido o expirado. Redirigiendo a login.');
        if (logoutFunction) {
          logoutFunction();
        } else {
          localStorage.removeItem('authToken');
          localStorage.removeItem('user');
          window.location.href = '/auth';
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;