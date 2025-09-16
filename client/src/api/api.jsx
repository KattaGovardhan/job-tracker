import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
export const url = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});
