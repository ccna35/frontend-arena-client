import { query } from "@/config/config";
import { Challenge } from "@/types/types";

const getAllChallenges = async (): Promise<Challenge[]> => {
  const res = await query.get("/challenges");

  // console.log(res.data);

  return res.data;
};

export const ProductService = {
  getAllChallenges,
};
