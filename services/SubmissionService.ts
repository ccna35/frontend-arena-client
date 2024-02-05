import { query } from "@/config/config";
import { User } from "@/types/types";

const getAllSubmissions = async (): Promise<User[]> => {
  const res = await query.get("submissions");

  return res.data;
};

const getOneSubmission = async (id: number): Promise<User[]> => {
  const res = await query.get(`submissions/${id}`);

  return res.data;
};

const updateUser = async (data: User): Promise<{ message: string }> => {
  const res = await query.put(`/users/${data.id}`, data);

  return res.data;
};

export const SubmissionService = {
  getAllSubmissions,
  getOneSubmission,
};
