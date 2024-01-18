import { Challenge } from "@/types/types";
import axios from "axios";

const query = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

const getAllChallenges = async (): Promise<Challenge[]> => {
  const res = await query.get("/challenges");

  // console.log(res.data);

  return res.data;
};

export const ProductService = {
  getAllChallenges,
};
