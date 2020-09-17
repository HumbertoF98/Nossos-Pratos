import axios from "axios";
/* import { getToken } from "./auth"; */

const api = axios.create({
  baseURL: "http://localhost:3333",
});

/**
Here the Axios interceptors were used,
 as the name suggests it intercepts a request before it actually happens,
  at that moment it is checked if there is a token in the localStorage,
   and if it exists, it adds the Authorization Header to the request.
 */
api.interceptors.request.use(async (config) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDAzNzc1ODgsImV4cCI6MTYwMDYzNjc4OCwic3ViIjoiZWQxZTJiNmEtOGFhMC00MWU1LTk5NzEtMDAyMDdiOGFjMWJmIn0.d1pvuWNkyhICcHLOyKIZAJSt1cj3apfbCx6PdRXQZRQ";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
