import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export const apiClient = axios.create({
    baseURL: API_URL, 
    headers: {
    "X-API-KEY": API_KEY,
    "Content-Type": "application/json",
  },
  timeout: 30000,
})