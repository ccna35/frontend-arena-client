import axios from "axios";

export const query = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});
