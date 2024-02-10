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
  featured_image: File;
  desktop_image: File;
  tablet_image?: File;
  smartphone_image?: File;
};

const getAllChallenges = async (): Promise<Challenge[]> => {
  const res = await query.get("/challenges");

  return res.data;
};

const getOneChallenge = async (id: string): Promise<Challenge> => {
  const res = await query.get("/challenges/" + id);

  return res.data[0];
};

const createChallenge = async (values: FormData): Promise<Challenge> => {
  const res = await query.post("/challenges", values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log(res);

  return res.data;
};

export const ChallengeService = {
  getAllChallenges,
  createChallenge,
  getOneChallenge,
};
