import { query } from "@/config/config";
import { Challenge } from "@/types/types";

type NewChallenge = {
  challenge_title: string;
  brief_description: string;
  challenge_description: string;
  extra_tips: string;
  challenge_languages: string;
  difficulty_level: string;
  figma: string;
  featured: string;
  desktop: string;
};

const getAllChallenges = async (): Promise<Challenge[]> => {
  const res = await query.get("/challenges");

  // console.log(res.data);

  return res.data;
};

const createChallenge = async (): Promise<NewChallenge> => {
  const res = await query.post("/challenges");

  console.log(res);

  return res.data;
};

export const ChallengeService = {
  getAllChallenges,
  createChallenge,
};
